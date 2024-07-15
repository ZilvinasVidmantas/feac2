import jwt from 'jsonwebtoken';
import { envVariables } from '../../../config';

export const generateToken = (payload: { id: string}) => {
  const token = jwt.sign(payload, envVariables.jwt.secret!, {
    expiresIn: envVariables.jwt.expiration,
  });

  return token;
};

