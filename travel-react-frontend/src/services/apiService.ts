import axios from "axios";

const API_BASE_URL = "https://your-api-url.com";

export const loginApi = async (email: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
  return response.data;
};

export const signupApi = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, { name, email, password });
  return response.data;
};

// Google Login Handler
export const loginWithGoogle = () => {
  window.location.href = `${API_BASE_URL}/auth/google`;
};

// Facebook Login Handler (alternative flow using OAuth redirect)
export const loginWithFacebook = () => {
  window.location.href = `${API_BASE_URL}/auth/facebook`;
};
