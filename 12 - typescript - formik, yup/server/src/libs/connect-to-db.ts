import mongoose from 'mongoose';
import { envVariables } from '../config';

export const connectToDb = async (succeccCallback: VoidFunction) => {
  mongoose.connect(envVariables.db.connection)
    .then(() => {
      console.log('Connected to MongoDB');
      succeccCallback();
    });
};
