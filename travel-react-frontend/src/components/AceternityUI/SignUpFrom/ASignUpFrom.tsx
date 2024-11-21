import React from "react";
import styles from "./SignupForm.module.scss";
import { Label } from "./Label";
import { Input } from "./Input";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { BottomGradient, LabelInputContainer } from "./helpers";
import { SIGNUP_TEXTS } from "./constants";

export const SignupForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{SIGNUP_TEXTS.WELCOME_TITLE}</h2>
      <p className={styles.subheading}>{SIGNUP_TEXTS.WELCOME_SUBTITLE}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className={styles.inputContainer}>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className={styles.inputContainer}>
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className={styles.inputContainer}>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button className={styles.submitButton} type="submit">
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className={styles.divider} />

        <div className={styles.authButtons}>
          <button className={styles.socialButton} type="button">
            <IconBrandGithub className={styles.icon} />
            <span className={styles.socialText}>GitHub</span>
            <BottomGradient />
          </button>
          <button className={styles.socialButton} type="button">
            <IconBrandGoogle className={styles.icon} />
            <span className={styles.socialText}>Google</span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
};
