const express = require('express')
const {
  config,
  configSwagger,
  configMiddlewares,
  configRouter,
  connectToDb
} = require('./config');

const server = express();
configSwagger(server);
configMiddlewares(server);
configRouter(server);

connectToDb(() => {
  server.listen(config.server.port, () => {
    console.log(`Server is running on http://localhost:${config.server.port}/api-docs`);
  });
});
