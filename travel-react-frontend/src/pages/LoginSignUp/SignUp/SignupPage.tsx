import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Signup.module.scss';
import { useAuthStore } from '../../../redux/slices/authSlice';
import { axiosInstance } from '../../../utils/axios';

const signupSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignupFormData = z.infer<typeof signupSchema>;

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      const response = await axiosInstance.post('/auth/signup', data);
      login(response.data.token, response.data.user);
      navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Create your account</h2>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input {...register('name')} type="text" />
              {errors.name && <p className={styles.errorText}>{errors.name.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input {...register('email')} type="email" />
              {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input {...register('password')} type="password" />
              {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input {...register('confirmPassword')} type="password" />
              {errors.confirmPassword && (
                <p className={styles.errorText}>{errors.confirmPassword.message}</p>
              )}
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <div className={styles.footer}>
            <div className={styles.separator}>
              <span>Already have an account?</span>
            </div>
            <Link to="/login" className={styles.linkButton}>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
