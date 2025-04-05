import express from 'express';

const server = express();
const port = 8081;

// Endpoints
  // Home
    server.get('/', (req, res) => {
      res.send('Hello World');
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
      res.send('miraaleatoria');
    });

  // mirapro
    server.get('/mirapro', (req, res) => {
      res.send('mirapro');
    });

  // mirameme
    server.get('/mirameme', (req, res) => {
      res.send('mirameme');
    });

// Starting up the server
server.listen(port, () => {
  console.log('Server online');
});
