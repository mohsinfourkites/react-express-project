import React from "react";
import { SignIn, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import styles from "./SignInPageClerk.module.scss";
import { authConstants } from "../../../components/MyFigma/LoginSignupFigma/authConstants";
import LoadingSpinner from "../../../components/UIVerse/LoadingSpinner/LoadingSpinner";

const SignInPageClerk: React.FC = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (isSignedIn) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className={styles.loginmainScreenSignup}>
      <div className={styles.loginleftSide}>
        <SignIn />
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
  );
};

const SignInPageClerkWrapper: React.FC = () => (
  <React.Suspense fallback={<LoadingSpinner />}>
    <SignInPageClerk />
  </React.Suspense>
);

export default SignInPageClerkWrapper;