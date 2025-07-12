const http = require('http');

const express = require('express');
const app = express();

const server = http.createServer(app);

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1>Hello, World!</h1>');
  // No need to call next() after sending a response
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});