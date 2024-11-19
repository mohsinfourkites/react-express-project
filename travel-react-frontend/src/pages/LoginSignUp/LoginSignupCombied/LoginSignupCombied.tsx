import React, { useState } from "react";
import styles from "./LoginSignupCombied.module.scss";
import { LOGIN_CONTENT, SIGNUP_CONTENT } from "./LoginConstants";
import { LoginForm } from "../../../components/AceternityUI/LoginForm/LoginForm";
import { SignupForm } from "../../../components/AceternityUI/SignUpFrom/ASignUpFrom";

const LoginSignupCombied: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const content = isLogin ? LOGIN_CONTENT : SIGNUP_CONTENT;

  return (
    <div
      className={`${styles.container} ${!isLogin ? styles.flipped : ""}`}
    >
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h1>{content.heading}</h1>
        <p>{content.description}</p>
        <div className={styles.imagesContainer}>
          <img src={content.images} alt={`${content.heading} Illustration`} />
        </div>
        <button
          className={styles.button}
          onClick={() => setIsLogin(!isLogin)}
        >
          {content.buttonText}
        </button>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        {isLogin ? (
          <>
            <LoginForm />
          </>
        ) : (
          <>
            <SignupForm />
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignupCombied;
