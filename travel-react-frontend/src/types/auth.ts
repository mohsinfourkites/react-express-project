export interface User {
    id: string;
    email: string;
    name: string;
    phone?: string;
    address?: string;
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (token: string, user: User) => void;
    logout: () => void;
  }
  
  export interface LoginFormData {
    email: string;
    password: string;
  }
  
  export interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }