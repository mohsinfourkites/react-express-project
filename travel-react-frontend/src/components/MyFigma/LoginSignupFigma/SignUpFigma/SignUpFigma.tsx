import React from "react";
// import styles from "./LoginFigma.module.scss";
// import { loginWithGoogle, loginWithFacebook } from "../../../../services/apiService";
// import { authConstants } from "../authConstants";
// import { SignupForm } from "../../../AceternityUI/SignUpFrom/ASignUpFrom";
// import { LoginForm } from "../../../AceternityUI/LoginForm/LoginForm";
import { SignUp } from "@clerk/clerk-react";


interface LoginProps {
  toggleView: () => void;
}

const SignUpFigma: React.FC<LoginProps> = () => {
  return (
     <SignUp />
  );
};

export default SignUpFigma;
