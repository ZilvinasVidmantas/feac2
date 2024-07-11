const express = require('express');
const getUsers = require('./queries/get-users');
const authMiddleware = require('../../middlewares/auth-middleware');

const ROUTER_API_BASE = '/api/users';
const usersRouter = express.Router();

usersRouter.get(ROUTER_API_BASE, authMiddleware, getUsers);

module.exports = usersRouter;
