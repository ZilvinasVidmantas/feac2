const express = require('express')
const morgan = require('morgan');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const studyProgramsRouter = require('./study-programs');

const server = express();
server.use(express.json());
server.use(morgan('common'));
server.use(cors());
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use(studyProgramsRouter);


server.listen(5005, () => {
  console.log('Server is running on http://localhost:5005')
});