import express from 'express';
import { authMiddleware } from '../../middlewares/auth-middleware';
import { getUsers } from './queries/get-users';

const ROUTER_API_BASE = '/api/users';
export const usersRouter = express.Router();

usersRouter.get(ROUTER_API_BASE, authMiddleware, getUsers);


