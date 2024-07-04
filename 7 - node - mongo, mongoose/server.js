const express = require('express')
const morgan = require('morgan');
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const studyProgramsRouter = require('./study-programs/router');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./study-programs/**/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.use(express.json());
server.use(morgan('common'));
server.use(cors());
server.use(studyProgramsRouter);

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log('Connected to MongoDB');
    server.listen(5005, () => {
      console.log('Server is running on http://localhost:5005/api-docs');
    });
  })