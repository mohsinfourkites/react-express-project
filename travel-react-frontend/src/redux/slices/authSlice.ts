import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, User } from '../../types/auth';


export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (token: string, user: User) => 
        set({ token, user, isAuthenticated: true }),
      logout: () => 
        set({ token: null, user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);