import React, { useState } from "react";
import styles from "./Auth.module.scss";
import LoginFigma from "../LoginFigma/LoginFigma";
import SignupFigma from "../SignUpFigma/SignUpFigma";
import { authConstants } from "../authConstants";

const AuthMain: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleView = () => setIsLogin(!isLogin);

  return (

    <div className={styles.whatToShowLoginSignup}>
      {isLogin ? (

        //Signup Screen
        <div className={styles.signupmainScreenLogin}>
          <div className={styles.signupleftSide}>
            <SignupFigma toggleView={toggleView} />

            <button className={styles.signupgoToLogintext} onClick={toggleView}>
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
      ) : (

        //Login Scren
        
        <div className={styles.loginmainScreenSignup}>
          <div className={styles.loginleftSide}>
            <LoginFigma toggleView={toggleView} />
            <button className={styles.logingoToSignuptext} onClick={toggleView}>
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
      )}
    </div>
  );
};

export default AuthMain;