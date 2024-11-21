import React from "react";
import styles from "./SignUpFigma.module.scss";

import { authConstants } from "../authConstants";

interface SignupProps {
  toggleView: () => void;
}

const Signup: React.FC<SignupProps> = ({ toggleView }) => {
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Use `signupApi` for backend integration
  };

  return (
    <div className={styles.signupContainer}>
      <h1>{authConstants.signupTitle}</h1>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={toggleView} className={styles.link}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
