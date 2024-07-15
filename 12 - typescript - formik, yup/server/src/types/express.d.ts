import { UserDto } from '../features/users/types/user';

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserDto;
    }
  }
}
