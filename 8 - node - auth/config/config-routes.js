const studyProgramsRouter = require('../features/study-programs/router');
const authRouter = require('../features/auth/router');
const usersRouter = require('../features/users/router');

const configRoutes = (server) => {
  server.use(authRouter);
  server.use(studyProgramsRouter);
  server.use(usersRouter);
}

module.exports = configRoutes;
