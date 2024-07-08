const studyProgramsRouter = require('../features/study-programs/router');
const authRouter = require('../features/auth/router');

const configRoutes = (server) => {
  server.use(authRouter);
  server.use(studyProgramsRouter);
}

module.exports = configRoutes;
