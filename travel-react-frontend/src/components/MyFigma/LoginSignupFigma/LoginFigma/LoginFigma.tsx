import React from "react";
import styles from "./LoginFigma.module.scss";
import { loginWithGoogle, loginWithFacebook } from "../../../../services/apiService";
import { authConstants } from "../authConstants";
import { SignupForm } from "../../../AceternityUI/SignUpFrom/ASignUpFrom";
import { LoginForm } from "../../../AceternityUI/LoginForm/LoginForm";
import { SignIn } from "@clerk/clerk-react";


interface LoginProps {
  toggleView: () => void;
}

const LoginFigma: React.FC<LoginProps> = () => {

  return (
    
     <SignIn />
  );
};

export default LoginFigma;
