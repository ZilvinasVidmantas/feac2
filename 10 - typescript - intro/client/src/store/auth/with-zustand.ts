import { User } from 'src/types/user';
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  error: null,
  login: async (email: string, password: string) => {
    const response = await fetch('http://localhost:3001/users');
    const users = await response.json() as User[];
    const user = users.find((user) => user.email === email && user.password === password);
    if (user !== undefined) {
      set({ user, error: null });
    } else {
      set({ error: "Bad login. Try again" });
    }
  },
}));
