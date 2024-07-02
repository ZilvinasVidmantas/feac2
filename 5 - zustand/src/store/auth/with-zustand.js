import {create} from 'zustand';

export const useAuth = create((set) => ({
  user: null,
  error: null,
  login: async (email, password) => {
    const response = await fetch('http://localhost:3001/users');
    const users = await response.json();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user !== undefined) {
      set({ user, error: null });
    } else {
      set({ error: "Bad login. Try again" });
    }
  },
}));
