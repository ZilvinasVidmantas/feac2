const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const envVariables = require('./config-env-variables');

const swaggerOptions = {
  definition: {
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
  },
  apis: ['./features/**/*.js'],
};

const configSwagger = (server) => {
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = configSwagger;
