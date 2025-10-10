// Right now, put every route in app.js
// Might move to separate /routes and /middleware later when codebase gets large
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import prisma from './prisma.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Allow client to call server api during development
// When deploy to production, let express serve the build file (change the path to client/dist instead of client)
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

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
      include: { users: true, chores: true },
    });
    if (!household) return res.status(404).json({ error: 'Household not found' });
    res.json(household);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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
app.put('/api/household:id', async (req, res) => {
  const { name } = req.body;
  const id = parseInt(req.params.id);
  if (Number.isNaN(id) || !name) return res.status(400).json({ error: 'Missing id or name' });
  try {
    const updated = await prisma.household.update({ where: { id: id }, data: { name } });
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
    const deleted = await prisma.household.delete({ where: { id } });
    res.json({ deleted: true, id: deleted.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// signup
app.post('/api/signup', async (req, res) => {
  const { name, email, password_hash } = req.body;

  try {
    const result = await prisma.user.create({
      data: { name, email, password_hash },
    });
    res.json(result);
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