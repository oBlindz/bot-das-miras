import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const server = express();
const port = 8081;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Server settings
server.use(express.static('src'));

// Endpoints
  // Home
    server.get('/', (req, res) => {
      res.sendFile(__dirname + '/front-end/pages/home.html');
    });

  // addmira (admin)
    server.get('/addmira', (req, res) => {
      res.send('addmira');
    });

  // removermira (admin)
    server.get('/removermira', (req, res) => {
      res.send('removermira');
    });

  // miraaleatoria
    server.get('/miraaleatoria', (req, res) => {
      res.sendFile(__dirname + '/front-end/pages/miraaleatoria.html');
    });

  // mirapro
    server.get('/mirapro', (req, res) => {
      res.sendFile(__dirname + '/front-end/pages/mirapro.html');
    });

  // mirameme
    server.get('/mirameme', (req, res) => {
      res.sendFile(__dirname + '/front-end/pages/mirameme.html');
    });

// Starting up the server
server.listen(port, () => {
  console.log('Server online on port: ', port);
});
