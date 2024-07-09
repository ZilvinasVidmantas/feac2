const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

const configMiddlewares = (server) => {
  server.use(express.json());
  server.use(morgan('common'));
  server.use(cors());
};

module.exports = configMiddlewares;
