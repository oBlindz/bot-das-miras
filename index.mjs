// Importing dependencies
import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import bodyParser from 'body-parser';

// Setting up dependencies
const server = express();
dotenv.config();
const port = process.env.PORT || 3012;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

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

    server.post('/addmira', (req, res) => {
      const jogo = req.body.jogo_selecionado;
      res.send(`O jogo selecionado foi: ${jogo}`);
    });

  // miraaleatoria
    server.get('/miraaleatoria', (req, res) => {
      res.status(200).sendFile(__dirname + '/front-end/pages/miraaleatoria.html');
    });

    server.post('/miraaleatoria', (req, res) => {
      const jogo = req.body.jogo_selecionado;
      res.send(`O jogo selecionado foi: ${jogo}`);
    });

  // mirapro
    server.get('/mirapro', (req, res) => {
      res.status(200).sendFile(__dirname + '/front-end/pages/mirapro.html');
    });
    
    server.post('/mirapro', (req, res) => {
      const jogo = req.body.jogo_selecionado;
      res.send(`O jogo selecionado foi: ${jogo}`);
    });

  // mirameme
    server.get('/mirameme', (req, res) => {
      res.status(200).sendFile(__dirname + '/front-end/pages/mirameme.html');
    });

    server.post('/mirameme', (req, res) => {
      const jogo = req.body.jogo_selecionado;
      res.send(`O jogo selecionado foi: ${jogo}`);
    });

// Starting up the server
server.listen(port, () => {
  console.log('Server online');
});
