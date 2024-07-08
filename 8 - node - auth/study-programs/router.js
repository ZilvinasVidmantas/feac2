const express = require('express');
const getStudyPrograms = require('./queries/get-study-programs');
const getStudyProgram = require('./queries/get-study-program');
const createStudyProgram = require('./mutations/create-study-program');
const updateStudyProgram = require('./mutations/update-study-program');
const deleteStudyProgram = require('./mutations/delete-study-program');

const ROUTER_API_BASE = '/api/study-programs';
const studyProgramsRouter = express.Router();

studyProgramsRouter.get(ROUTER_API_BASE, getStudyPrograms);
studyProgramsRouter.get(`${ROUTER_API_BASE}/:id`, getStudyProgram);
studyProgramsRouter.post(ROUTER_API_BASE, createStudyProgram);
studyProgramsRouter.put(`${ROUTER_API_BASE}/:id`, updateStudyProgram);
studyProgramsRouter.delete(`${ROUTER_API_BASE}/:id`, deleteStudyProgram);

module.exports = studyProgramsRouter;
