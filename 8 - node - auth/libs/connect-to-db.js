const mongoose = require('mongoose');
const config = require('../config/config-env-variables');

const connectToDb = async (succeccCallback) => {
  mongoose.connect(config.db.connection,)
    .then(() => {
      console.log('Connected to MongoDB');
      succeccCallback()
    })
}

module.exports = connectToDb;
