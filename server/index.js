// const express = require('express');
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const path = require('path');



// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.json());
// app.use(bodyParser.json());

// // Allow client to call server api during development
// // When deploy to production, let express serve the build file (change the path to client/dist instead of client)
// app.use(cors());

// const api = require('./app');
// app.use(api);

// // Serve the static vue files
// // app.use(express.static(path.join(__dirname, '..', 'client')));

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     // eslint-disable-next-line no-console
//     console.log(`Server listening on port ${port}`);
//   });

// module.exports = app;