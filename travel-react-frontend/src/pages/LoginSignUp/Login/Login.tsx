import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.scss'; // Import the module.scss file
import { useAuthStore } from '../../../redux/slices/authSlice';
import { axiosInstance } from '../../../utils/axios';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axiosInstance.post('/auth/login', data);
      login(response.data.token, response.data.user);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sign in to your account</h2>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <div className={styles.inputWrapper}>
                <input
                  {...register('email')}
                  type="email"
                  className={styles.input}
                />
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.inputWrapper}>
                <input
                  {...register('password')}
                  type="password"
                  className={styles.input}
                />
                {errors.password && (
                  <p className={styles.errorMessage}>{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <div className={styles.footer}>
            <div className={styles.separator}>
              <div className={styles.line} />
              <span className={styles.separatorText}>Don't have an account?</span>
            </div>

            <div className={styles.signupContainer}>
              <Link
                to="/signup"
                className={styles.signupButton}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
