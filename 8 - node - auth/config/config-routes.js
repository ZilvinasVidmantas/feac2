const studyProgramsRouter = require('../features/study-programs/router');

const configRoutes = (server) => {
  server.use(studyProgramsRouter);
}

module.exports = configRoutes;
