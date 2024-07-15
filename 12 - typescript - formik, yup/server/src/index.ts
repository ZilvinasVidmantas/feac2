import express from 'express';
import { configSwagger } from './config/config-swagger';
import { configMiddlewares, configRoutes, connectToDb, envVariables } from './config';

(async function startServer()  {
  const server = express();
  await configSwagger(server);
  configMiddlewares(server);
  configRoutes(server);
  
  connectToDb(() => {
    server.listen(envVariables.server.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on http://localhost:${envVariables.server.port}/api-docs`);
    });
  });
})();