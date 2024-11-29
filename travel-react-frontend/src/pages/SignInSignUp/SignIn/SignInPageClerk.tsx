import React, { useState } from "react";
import { SignIn, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import styles from "./SignInPageClerk.module.scss";
import { authConstants } from "../../../components/MyFigma/LoginSignupFigma/authConstants";
import LoadingSpinner from "../../../components/UIVerse/LoadingSpinner/LoadingSpinner";
import LoadingSpinnerCircle from "../../../components/UIVerse/LoadingSpinner/LoadingSpinnerCircle";
import AnimateBookPagesLoader from "../../../components/UIVerse/AnimateBookPages/AnimateBookPages";

type AuthMode = "sign-in" | "sign-up";

const SignInPageClerk: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("sign-in");
  const { isSignedIn, isLoaded } = useUser();

  // If authentication state is not yet loaded, show a loading state
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
         {/* <LoadingSpinner />
         <LoadingSpinnerCircle /> */}
         <AnimateBookPagesLoader />
      </div>
    );
  }

  // If user is already signed in, redirect to profile
  if (isSignedIn) {
    return <Navigate to="/profile" replace />;
  }

  const toggleAuthMode = () => {
    setAuthMode(authMode === "sign-in" ? "sign-up" : "sign-in");
  };

  return (
    <div className={styles.whatToShowLoginSignup}>
      <div className={styles.loginmainScreenSignup}>
        <div className={styles.loginleftSide}>
          <SignIn />
          {/* <button
            className={styles.logingoToSignuptext}
            onClick={toggleAuthMode}
          >
            Don't Have An Account ? <br></br>
            Signup
          </button> */}
        </div>
        <div className={styles.loginrightSide}>
          <div className={styles.loginrightContainer}>
            <div className={styles.loginrightText}>
              <div className={styles.logintextheading}>
                Welcome to Login Page
              </div>
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

export default SignInPageClerk;
