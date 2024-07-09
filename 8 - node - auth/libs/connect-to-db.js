const mongoose = require('mongoose');
const envVariables = require('../config/config-env-variables');

const connectToDb = async (succeccCallback) => {
  mongoose.connect(envVariables.db.connection,)
    .then(() => {
      console.log('Connected to MongoDB');
      succeccCallback()
    })
}

module.exports = connectToDb;
