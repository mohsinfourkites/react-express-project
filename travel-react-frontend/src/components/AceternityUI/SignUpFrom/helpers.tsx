import React from "react";
import styles from "./helper.module.scss"; // Import the new styles

export const BottomGradient: React.FC = () => (
  <>
    <span className={styles.bottomGradient1} />
    <span className={styles.bottomGradient2} />
  </>
);

export const LabelInputContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={`${styles.labelInputContainer} ${className || ""}`}>
      {children}
    </div>
  );
};
