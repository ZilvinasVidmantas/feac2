const envVariables = require('./config-env-variables');
const configSwagger = require('./config-swagger');
const configMiddlewares = require('./config-midlewares');
const configRouter = require('./config-routes');
const connectToDb = require('../libs/connect-to-db');

module.exports = {
  envVariables,
  configSwagger,
  configMiddlewares,
  configRouter,
  connectToDb,
};
