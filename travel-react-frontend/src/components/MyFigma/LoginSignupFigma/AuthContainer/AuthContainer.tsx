import React, { useState } from "react";
import { SignIn, SignUp, useUser } from '@clerk/clerk-react';
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

  return (
    <div className={styles.authContainer}>
      <div className={styles.authMainScreenLogin}>
        <div className={styles.authLeftSide}>
          <div className={styles.authFormContainer}>
            {authMode === 'sign-in' ? (
              <SignIn 
                routing="path" 
                path="/sign-in"
                appearance={{
                  elements: {
                    rootBox: 'w-full',
                    card: 'w-full',
                    headerTitle: 'text-2xl font-bold',
                    socialButtonsBlockButton: 'w-full',
                    divider: 'my-4',
                    formButtonPrimary: 'w-full bg-blue-500 hover:bg-blue-600'
                  }
                }}
              />
            ) : (
              <SignUp 
                routing="path" 
                path="/sign-up"
                appearance={{
                  elements: {
                    rootBox: 'w-full',
                    card: 'w-full',
                    headerTitle: 'text-2xl font-bold',
                    socialButtonsBlockButton: 'w-full',
                    divider: 'my-4',
                    formButtonPrimary: 'w-full bg-blue-500 hover:bg-blue-600'
                  }
                }}
              />
            )}

            <div className={styles.authSwitchText}>
              {authMode === 'sign-in' 
                ? "Don't Have An Account? " 
                : "Already have an account? "}
              <button 
                onClick={toggleAuthMode} 
                className={styles.switchLink}
              >
                {authMode === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.authRightSide}>
          <div className={styles.authRightContainer}>
            <div className={styles.authRightText}>
              <div className={styles.authTextHeading}>
                {authMode === 'sign-in' 
                  ? 'Welcome Back!' 
                  : 'Join Our Community'}
              </div>
              <div className={styles.authTextSubheading}>
                <p>
                  {authMode === 'sign-in' 
                    ? 'Sign in to continue your journey' 
                    : 'Create an account to explore more'}
                </p>
              </div>
            </div>
            <div className={styles.authMainImageRight}>
              <img
                src={authConstants.mainImage}
                alt="MainImage"
                className={styles.authMainImageRight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;