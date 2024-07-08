const express = require('express')
const config = require('./config/config-env-variables');
const configSwagger = require('./config/config-swagger');
const configMiddlewares = require('./config/config-miidlewares');
const configRouter = require('./config/config-routes');
const connectToDb = require('./libs/connect-to-db');

const server = express();
configSwagger(server);
configMiddlewares(server);
configRouter(server);

connectToDb(() => {
  server.listen(config.server.port, () => {
    console.log(`Server is running on http://localhost:${config.server.port}/api-docs`);
  });
});
