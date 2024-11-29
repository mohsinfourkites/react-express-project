import React, { useState } from "react";
import { SignedIn, SignIn, SignUp, useUser } from '@clerk/clerk-react';
import { Navigate } from "react-router-dom";
import styles from "./Auth.module.scss";
import { authConstants } from "../authConstants";

type AuthMode = 'sign-in' | 'sign-up';

const AuthContainer: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('sign-in');
  const { isSignedIn, isLoaded } = useUser();

  // If authentication state is not yet loaded, show a loading state
  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // If user is already signed in, redirect to profile
  if (isSignedIn) {
    return <Navigate to="/profile" replace />;
  }

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'sign-in' ? 'sign-up' : 'sign-in');
  };

  // function Hello() {
  //   const { isSignedIn, user } = useUser();
  //   if(!isSignedIn) {
  //     return null;
  //   }
  //   return <div>Hello, {user.}</div>
  // }

  return (
    <div className={styles.whatToShowLoginSignup}>
   
      <div className={styles.signupmainScreenLogin}>
        <div className={styles.signupleftSide}>
          <SignUp />

          <button className={styles.signupgoToLogintext} onClick={toggleAuthMode}>
            Already Have An Account ? <br></br>
            Login
          </button>
        </div>
        <div className={styles.signuprightSide}>
          <div className={styles.signuprightContainer}>
            <div className={styles.signuprightText}>
              <div className={styles.signuptextheading}>Welcome To SignUp Page</div>
              <div className={styles.signuptextsubheading}>
                <p>Travel with us and explore the world</p>
              </div>
            </div>
            <div className={styles.signupmainImageRight}>
              <img
                src={authConstants.mainImage}
                alt="MainImage"
                className={styles.signupmainImageRight}
              />
            </div>
          </div>
        </div>
      </div>
   


      <div className={styles.loginmainScreenSignup}>
        <div className={styles.loginleftSide}>
          <SignIn />
          <button className={styles.logingoToSignuptext} onClick={toggleAuthMode}>
            Don't Have An Account ? <br></br>
            Signup
          </button>
        </div>
        <div className={styles.loginrightSide}>
          <div className={styles.loginrightContainer}>
            <div className={styles.loginrightText}>
              <div className={styles.logintextheading}>Welcome to Login Page</div>
              <div className={styles.logintextsubheading}>
                <p>Travel with us and explore the world</p>
              </div>
            </div>
            <div className={styles.loginmainImageRight}>
              <img
                src={authConstants.mainImage}
                alt="MainImage"
                className={styles.loginmainImageRight}
              />
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default AuthContainer;