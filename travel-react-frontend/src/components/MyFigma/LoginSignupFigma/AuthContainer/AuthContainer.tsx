import React, { useState } from "react";
import styles from "./Auth.module.scss";
import LoginFigma from "../LoginFigma/LoginFigma";
import SignupFigma from "../SignUpFigma/SignUpFigma";
import { authConstants } from "../authConstants";
import { LoginForm } from "../../../AceternityUI/LoginForm/LoginForm";

const AuthMain: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleView = () => setIsLogin(!isLogin);

  return (

    <div className={styles.whatToShowLoginSignup}>
      {isLogin ? (
        
        <div className={styles.mainScreenLogin}>
          <div className={styles.leftSide}>
            <SignupFigma toggleView={toggleView} />

            <button className={styles.goToSignUptext} onClick={toggleView}>
              Already Have An Account ? <br></br>
              Login
            </button>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.rightContainer}>
              <div className={styles.rightText}>
                <div className={styles.textheading}>Welcome to Travel</div>
                <div className={styles.textsubheading}>
                  <p>Travel with us and explore the world</p>
                </div>
              </div>
              <div className={styles.mainImageRight}>
                <img
                  src={authConstants.mainImage}
                  alt="MainImage"
                  className={styles.mainImageRight}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        
        <div className={styles.mainScreenSignup}>
          <div className={styles.leftSide}>
            <LoginFigma toggleView={toggleView} />

            {/* <button className={styles.goToSignUptext} onClick={toggleView}>
              Don't have an account? Sign up
            </button> */}
            <button className={styles.goToLogintext} onClick={toggleView}>
              Don't Have An Account ? <br></br>
              Signup
            </button>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.rightContainer}>
              <div className={styles.rightText}>
                <div className={styles.textheading}>Welcome to Travel</div>
                <div className={styles.textsubheading}>
                  <p>Travel with us and explore the world</p>
                </div>
              </div>
              <div className={styles.mainImageRight}>
                <img
                  src={authConstants.mainImage}
                  alt="MainImage"
                  className={styles.mainImageRight}
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