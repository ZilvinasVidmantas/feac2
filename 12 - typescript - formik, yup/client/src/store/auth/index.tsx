import { ApiService } from 'src/services/api-service';
import { User } from 'src/types/user';
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
}


type AuthResponse = {
  token: string;
  user: User;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  error: null,
  login: async (email: string, password: string) => {
    const response = await ApiService.post<AuthResponse>('/auth/login', {
      email,
      password,
    });

    if(response.status === 200) {
      set({
        user: response.data.user,
      });
      localStorage.setItem('token', response.data.token);
    } else {
      set({ error: "Bad login. Try again" });
    }
  },
}));
