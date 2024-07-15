import { Express } from 'express';
import swaggerAutogen from 'swagger-autogen';
import swaggerUi from 'swagger-ui-express';
import { envVariables } from './config-env-variables';
import swaggerOutput from './swagger_output.json';

const Info = {
  openapi: '3.0.0',
  info: {
    title: 'Hello World',
    version: '1.0.0',
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{
    bearerAuth: [],
  }],
  servers: [
    {
      url: `http://localhost:${envVariables.server.port}`,
    },
  ],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/features/**/*.ts'];

export const configSwagger = async (server: Express) => {
  await swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, Info);
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
};

