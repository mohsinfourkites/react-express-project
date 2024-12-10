// EnquiryForm.tsx
import React, { useState } from 'react';
import { EnquiryFormProps } from './types';
import styles from "./EnquiryForm.module.scss"
import { style } from '@mui/system';

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gather form data and call the onSubmit callback
    const formData = {
      name,
      email,
      message,
    };
    onSubmit(formData);
  };

  return (
    <div className={styles.EnquiryForm}>
    <form onSubmit={handleSubmit}>
      <div className={styles.nameContainer}>
        <div className={styles.nameContainerInput}>
        <label htmlFor="name">Name:</label>
        </div>
        <div className={styles.nameContainerText}>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className={styles.EmailCotainer}>
        <div className={styles.EmailCotainerInput}>
        <label htmlFor="email">Email:</label>
        </div>
        <div className={styles.EmailCotainerText}>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className={styles.MessageConatiner}>
        <div className={styles.MessageConatinerInput}>
        <label htmlFor="message">Message:</label>
        </div>
        <div className={styles.MessageConatinerText}>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
      </div>

      <div className={styles.SubmitButton}>
      <button type="submit">Book Now</button>
      </div>
      
    </form>
    </div>
  );
};