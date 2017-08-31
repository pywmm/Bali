

// mock server.js
// const path = require('path');
const jsonServer = require('json-server');
const dbJson = require('./db');

// const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router(dbJson);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(9000, () => {
  console.log('JSON Server is running');
});
