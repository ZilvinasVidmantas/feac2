const express = require('express');
const login = require('./queries/login');
const register = require('./mutations/register');

const ROUTER_API_BASE = '/api/auth';
const studyProgramsRouter = express.Router();

studyProgramsRouter.post(`${ROUTER_API_BASE}/login`, login);
studyProgramsRouter.post(`${ROUTER_API_BASE}/register`, register);

module.exports = studyProgramsRouter;
