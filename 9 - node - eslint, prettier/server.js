const express = require('express');
const {
  envVariables,
  configSwagger,
  configMiddlewares,
  configRouter,
  connectToDb,
} = require('./config');

const server = express();
configSwagger(server);
configMiddlewares(server);
configRouter(server);

connectToDb(() => {
  server.listen(envVariables.server.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on http://localhost:${envVariables.server.port}/api-docs`);
  });
});
