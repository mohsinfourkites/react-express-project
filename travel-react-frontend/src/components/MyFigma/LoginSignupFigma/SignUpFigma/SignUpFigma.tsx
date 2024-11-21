import React from "react";
import styles from "./LoginFigma.module.scss";
import { loginWithGoogle, loginWithFacebook } from "../../../../services/apiService";
import { authConstants } from "../authConstants";
import { SignupForm } from "../../../AceternityUI/SignUpFrom/ASignUpFrom";
import { LoginForm } from "../../../AceternityUI/LoginForm/LoginForm";


interface LoginProps {
  toggleView: () => void;
}

const LoginFigma: React.FC<LoginProps> = ({ toggleView }) => {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Use `loginApi` for backend integration
  };

  return (
    
     <SignupForm />
  );
};

export default LoginFigma;
