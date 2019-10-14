require('dotenv').config();
const express = require('express');

const routes = require('./routes');

const port = process.env.PORT || 3000;

const server = express();

let totalRequests = 0;

server.use((request, response, next) => {
  console.log(`Total requests to server ${totalRequests++}`);
  return next();
});

server.use(express.json());
server.use(routes);

server.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});
