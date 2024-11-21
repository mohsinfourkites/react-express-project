import React, { useState } from 'react';
import styles from './AuthForm.module.scss';

import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import { loginUser, signUpUser } from '../../../services/apiService';
import { IMAGES, TEXTS } from '../LoginSignupFigma/authConstants';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = isLogin
        ? await loginUser({ email: formData.email, password: formData.password })
        : await signUpUser({ name: formData.name, email: formData.email, password: formData.password });

      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = (response: any) => {
    console.log('Google login success:', response);
  };

  const handleFacebookResponse = (response: any) => {
    console.log('Facebook login success:', response);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${isLogin ? IMAGES.LOGIN_BACKGROUND : IMAGES.SIGNUP_BACKGROUND})` }}
      ></div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>{isLogin ? TEXTS.LOGIN.TITLE : TEXTS.SIGNUP.TITLE}</h1>
        <p>{isLogin ? TEXTS.LOGIN.SUBTITLE : TEXTS.SIGNUP.SUBTITLE}</p>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : isLogin ? TEXTS.LOGIN.BUTTON : TEXTS.SIGNUP.BUTTON}
        </button>

        <div className={styles.oauth}>
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Login with Google"
            onSuccess={handleGoogleSuccess}
            onFailure={(e) => console.error('Google login error:', e)}
          />
          {/* <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookResponse}
            textButton="Login with Facebook"
            icon={<img src={IMAGES.FACEBOOK_ICON} alt="Facebook" />}
          /> */}
        </div>

        <p>
          {isLogin ? 'New here?' : 'Already have an account?'}
          <button type="button" onClick={toggleForm}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
