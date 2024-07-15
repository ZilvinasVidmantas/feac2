import express from 'express';
import { login} from './queries/login';
import { register } from './mutations/register';

const ROUTER_API_BASE = '/api/auth';
export const authRouter = express.Router();

authRouter.post(`${ROUTER_API_BASE}/login`, login);
authRouter.post(`${ROUTER_API_BASE}/register`, register);
