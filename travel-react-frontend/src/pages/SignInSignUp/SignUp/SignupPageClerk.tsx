import React, { Suspense } from "react";
import { SignUp, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import styles from "./SignupPageClerk.module.scss";
import { authConstants } from "../../../components/MyFigma/LoginSignupFigma/authConstants";
import LoadingSpinner from "../../../components/UIVerse/LoadingSpinner/LoadingSpinner";

const SignUpPageClerk: React.FC = () => {
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
    <div className={styles.signupmainScreenLogin}>
      <div className={styles.signupleftSide}>
        <SignUp />
      </div>
      <div className={styles.signuprightSide}>
        <div className={styles.signuprightContainer}>
          <div className={styles.signuprightText}>
            <div className={styles.signuptextheading}>
              Welcome To SignUp Page
            </div>
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
  );
};

const SignUpPageClerkWrapper: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <SignUpPageClerk />
  </Suspense>
);

export default SignUpPageClerkWrapper;