const express = require('express');
const bodyParser = require('body-parser');

const mockData = require('./data/mockData');

const server = express();

server.use(bodyParser.json());

server.get('/jsa', (req, res) => {
  res.send(mockData);
});

module.exports = server;
