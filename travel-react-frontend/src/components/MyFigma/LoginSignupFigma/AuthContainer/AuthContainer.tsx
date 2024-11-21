import React, { useState } from "react";
import styles from "./Auth.module.scss";
import Login from "../LoginFigma/LoginFigma";
import Signup from "../SignUpFigma/SignUpFigma";
import { authConstants } from "../authConstants";
import LoginFigma from "../LoginFigma/LoginFigma";

const AuthMain: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => setIsLogin(!isLogin);

  return (
    <div className={styles.MainScreen}>
      <div className={styles.leftSide}>
     < LoginFigma toggleView={function (): void {
          throw new Error("Function not implemented.");
        } } />
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

    // <div className={styles.authContainer}>
    //   {isLogin ? <Login toggleView={toggleView} /> : <Signup toggleView={toggleView} />}
    // </div>
  );
};

export default AuthMain;
