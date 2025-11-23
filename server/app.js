// Right now, put every route in app.js
// Might move to separate /routes and /middleware later when codebase gets large
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import prisma from './prisma.js';
import bodyParser from 'body-parser';
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const databaseUrl = process.env.DATABASE_URL
const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow client to call server api during development
// When deploy to production, let express serve the build file (change the path to client/dist instead of client)
app.use(cors());


// Serve the static vue files
app.use(express.static(path.join(__dirname, '..', 'client')));

// render Vue app (client/index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// retrieve household record, users and chores by id 
app.get('/api/household/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
  try {
    const household = await prisma.household.findUnique({
      where: { id },
      // only use include for relations
      include: { users: true, chores: true },
    });
    if (!household) return res.status(404).json({ error: 'Household not found' });
    res.json(household);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get household by join code
app.get('/api/household/joinCode/:joinCode', async (req, res) => {
  const id = req.params;
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid Join Code' });

  const household = await prisma.household.findUnique({ where: { joinCode: id.joinCode } });
  if (!household) return res.status(404).json({ error: 'Not found' });
  res.json(household);
});

// create household 
app.post('/api/household', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Missing name' });
  try {
    const created = await prisma.household.create({ data: { name } });
    res.json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// edit household name
app.put('/api/household/:id', async (req, res) => {

  const { name } = req.body;
  const id = parseInt(req.params.id);
  if (Number.isNaN(id) || !name) return res.status(400).json({ error: 'Missing id or name' });
  try {
    const updated = await prisma.household.update({ where: { id }, data: { name } });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// delete household by id
app.delete('/api/household/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
  try {
    // delete all chores in the household
    await prisma.chore.deleteMany({ where: { householdId: id } });
    // delete household
    const deleted = await prisma.household.delete({ where: { id } });
    res.json({ deleted: true, id: deleted.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// signup
app.post('/api/signup', async (req, res) => {
  let defaultAvatar = [
    {name: "YellowSmileyFace", type: "skinTone", id: 0},
    {name: "PurpleBeanie", type: "hat", id: 0},
    {name: "LongMediumBrownHair", type: "hair", id: 0},
    {name: "BlueWolfShirt", type: "shirt", id: 0},
    {name: "LightBlueBackground", type: "background", id: 0},
    {name: "BlueBook", type: "handProp", id: 0}
  ]
  try {
    const {name, role, email, password_hash, difficulty, totalPoints, maxChoreTime, householdId } = req.body;
    for (let i=0; i < defaultAvatar.length; i++) {
      const avatarProp = await prisma.avatarProp.findUnique({ where: { name: defaultAvatar[i].name, type: defaultAvatar[i].type}});
      if (avatarProp && avatarProp.id) {
        defaultAvatar[i].id = avatarProp.id;
      } else {
        return res.status(514).json({ error: `Can't fetch default avatar prop ${ defaultAvatar[i].name }` });
      }
    }
    const result = await prisma.user.create({
      data: {
        name,
        email,
        password_hash, 
        role,
        difficulty,
        totalPoints,
        maxChoreTime,
        householdId,
        avatar: {
          create: {
            skinToneId: defaultAvatar[0].id,
            hatId: defaultAvatar[1].id,
            hairId: defaultAvatar[2].id,
            shirtId: defaultAvatar[3].id,
            backgroundId: defaultAvatar[4].id,
            handPropId: defaultAvatar[5].id
          }
        },
        userAvatarProps: {
          create: [
            { propId: defaultAvatar[0].id },
            { propId: defaultAvatar[1].id },
            { propId: defaultAvatar[2].id },
            { propId: defaultAvatar[3].id },
            { propId: defaultAvatar[4].id },
            { propId: defaultAvatar[5].id },
          ]
        }
      },
      include: {
        avatar: true,
        userAvatarProps: true
      }
    });
    res.json(result);
  } catch (err) {
    console.log("Error: " + err);
    console.log(err.code)
    if (err.code === 'P2002'){
      console.log("violated email constraint")
      res.status(513).json({ error: err.message })
    }
    else{
    res.status(500).json({ error: err.message });
    }
  }
});

// login
app.post('/api/login', async (req, res) => {
  const { email, password_hash } = req.body;
  if (!email || !password_hash) return res.status(400).json({ error: 'Missing email or password' });

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    // For now, compare the password_hash directly
    // Future version: verify a hashed password with stored salt
    if (user.password_hash !== password_hash) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // hide password_hash and salt, return the rest of the user object
    const { password_hash: _hiddenPassword, salt: _hiddenSalt, ...safeUser } = user;
    return res.json({ user: safeUser });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// update user
app.put('/api/user/:id', async (req, res) => {
  const { id } = req.params;
  if(Number.isNaN(id)) { return res.status(400).json({ error: "Invalid id" })};
  const { name, email, password_hash, difficulty, maxChoreTime } = req.body;
  try {
    const updated = await prisma.user.update({ where:  { id: Number(id) }, data: { name, email, password_hash, difficulty, maxChoreTime } });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//update a user's total points
app.put('/api/user/:id/points', async (req, res) => {
  const { id } = req.params;
  if(Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id"});
  }

  const { points } = req.body;
  if(Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid points"});
  }
  try {
    const updated = await prisma.user.update({ where: { id: Number(id) }, data: { totalPoints: { increment: Number(points)}}})
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// delete user
app.delete('/api/user/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const deleted = await prisma.user.delete({ where: { id: Number(id) }});
    res.json({deleted: true, id: deleted.id});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

// get all chores 
app.get('/api/chores', async (req, res) => {
  const {householdId} = req.query;
  try {
    const chores = await prisma.chore.findMany({where: { householdId: Number(householdId)}});
    res.json(chores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// gets chores by assignee id
app.get('/api/chores/assignee/:assigneeId', async (req, res) => {
  const {assigneeId} = req.params;
  const chores = await prisma.chore.findMany({where: {  assigneeId: Number(assigneeId)  }});
  res.json(chores);
});

// get one chore by id
app.get('/api/chores/:id', async (req, res) => {
  const id = req.params;
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });

  const chore = await prisma.chore.findUnique({ where: { id: Number(id) } });
  if (!chore) return res.status(404).json({ error: 'Not found' });
  res.json(chore);
});

// create chore
app.post('/api/chores', async (req, res) => {
  const {name, description, difficulty, location, estimatedTime, dueDate, repeat, householdId, assigneeId} = req.body;
  var chore;
  if(assigneeId) {
    chore = await prisma.chore.create({data: {
      name, 
      description, 
      difficulty, 
      location, 
      estimatedTime, 
      dueDate, 
      repeat, 
      household: {
        connect: {id: householdId},
      }, 
      assignee: {
        connect: {id: assigneeId},
      }
    }});
  } else {
    chore = await prisma.chore.create({data: {
      name, 
      description, 
      difficulty, 
      location, 
      estimatedTime, 
      dueDate, 
      repeat, 
      household: {
        connect: {id: householdId},
      },
    }});
  }
  res.json(chore);
});

// edit chore
app.put('/api/chores/:id', async (req, res) => {
  const {id} = req.params;
  const {name, description, difficulty, location, estimatedTime, dueDate, repeat, householdId, assigneeId} = req.body;
  
  let chore;
  if(assigneeId) {
    chore = await prisma.chore.update({where: {id: Number(id)}, data: {name, description, difficulty, location, estimatedTime, dueDate, repeat, 
    assignee: {
      connect: {id: assigneeId},
    }}});
  } else {
    chore = await prisma.chore.update({where: {id: Number(id)}, data: {name, description, difficulty, location, estimatedTime, dueDate, repeat, 
      assignee: {
        disconnect: true,
      }}
    });
  }
  res.json(chore);
});

// delete chore
app.delete('/api/chore/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const deleted = await prisma.chore.delete({ where: { id: Number(id) }});
    res.json({deleted: true, id: deleted.id});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

// Get avatar of the user
// Response: Array of AvatarProp objects with url of images
app.get('/api/avatar/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const avatar = await prisma.avatar.findUnique({
      where: { ownerId: Number(userId) },
      include: {
        skinTone: true,
        hat: true,
        hair: true,
        shirt: true,
        background: true,
        handProp: true,
      },
    });

    if (!avatar) {
      return res.status(404).json({ error: 'Avatar not found' });
    }

    const avatarParts = [
      avatar.skinTone,
      avatar.hat,
      avatar.hair,
      avatar.shirt,
      avatar.background,
      avatar.handProp,
    ].filter(Boolean); // skip null/undefined

    for (const part of avatarParts) {
      // check that part has a name before trying to generate a signed URL
      if (!part || !part.name) continue;

      const getPartParams = {
        Bucket: bucketName,
        Key: `avatar-props/${part.name}.png`,
      };
      const command = new GetObjectCommand(getPartParams);
      try {
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
        part.url = url;
      } catch (err) {
        console.error('Failed to generate signed URL for', part.name, err?.message || err);
      }
    }

    res.json(avatarParts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// equip avatar with a prop
// Takes an ownerId and a prop object that contains attributes id and type
app.put('/api/avatar/', async (req, res) => {
  const { ownerId, prop } = req.body;
  try {
    const result = await prisma.avatar.update({
      where: { ownerId: Number(ownerId) },
      data: {
        [`${prop.type}Id`]: prop.id,
      },
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get all avatar props to display in the store
app.get('/api/avatar-props', async (req, res) => {
  try {
    const props = await prisma.avatarProp.findMany();
    for (const prop of props) {
      const getPropsParams = {
        Bucket: bucketName,
        Key: `avatar-props/${prop.name}.png`
      }
      const command = new GetObjectCommand(getPropsParams);
      try {
          const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
          prop.url = url;
      } catch (err) {
        console.error('Failed to generate signed URL for', part.name, err?.message || err);
      }
    };
    res.json(props);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

// get ids of avatar props belonging to the user
app.get('/api/avatar-props/:userId', async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const userProps = await prisma.userAvatarProps.findMany({ where: { userId } });
    const propIds = userProps.map((userProp) => userProp.propId)
    res.json(propIds);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

// buy props
app.put('/api/prop/buy', async (req, res) => {
  const { userId, propId } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(userId) } });
    const prop = await prisma.avatarProp.findUnique({ where: { id: Number(propId) }});
    // Error if user try to buy props more expensive than their available balance
    if (user.currentPoints < prop.cost) {
      res.status(403).json({ error: "Insufficient point balance."});
    }
    else {
      // deduct points
      const newPoints = user.currentPoints - prop.cost;
      await prisma.user.update({ 
        where: { id: user.id }, 
        data: {
          currentPoints: newPoints,
        },
      })
      // link prop to user
      const result = await prisma.userAvatarProps.create({
        data: {
          userId: user.id,
          propId: prop.id,
        },
      });
      res.json(result);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});

export default app;