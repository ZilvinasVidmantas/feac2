import { Express } from 'express';
import { studyProgramsRouter } from '../features/study-programs/router';
import { authRouter } from '../features/auth/router';
import { usersRouter } from '../features/users/router';

export const configRoutes = (server: Express) => {
  server.use(authRouter);
  server.use(studyProgramsRouter);
  server.use(usersRouter);
};
