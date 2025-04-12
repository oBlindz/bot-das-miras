// Importing dependencies
import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// Setting up dependencies
const server = express();
dotenv.config();
const port = process.env.PORT || 3012;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Server settings
server.use(express.static('src'));

// Endpoints
  // Home
    server.get('/', (req, res) => {
      res.status(200).sendFile(__dirname + '/front-end/pages/home.html');
    });

  // addmira 
    server.get('/addmira', (req, res) => {
      // UP URL to a google forms
      res.status(301).sendFile(__dirname + '/front-end/pages/addmira.html');
    });

  // miraaleatoria
    server.get('/miraaleatoria', (req, res) => {
      res.status(200).sendFile(__dirname + '/front-end/pages/miraaleatoria.html');
    });

  // mirapro
    server.get('/mirapro', (req, res) => {
      res.status(200).sendFile(__dirname + '/front-end/pages/mirapro.html');
    });

  // mirameme
    server.get('/mirameme', (req, res) => {
      res.status(200).sendFile(__dirname + '/front-end/pages/mirameme.html');
    });

// Starting up the server
server.listen(port, () => {
  console.log('Server online');
});
