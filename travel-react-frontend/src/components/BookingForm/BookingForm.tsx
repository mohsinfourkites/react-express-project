import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import styles from './BookingForm.module.scss';

const BookingForm: React.FC = () => {
  const [details, setDetails] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Typography variant="h6" className={styles.title}>Book Your Package</Typography>
      <TextField label="Name" name="name" variant="outlined" fullWidth margin="normal" value={details.name} onChange={handleChange} />
      <TextField label="Email" name="email" variant="outlined" fullWidth margin="normal" value={details.email} onChange={handleChange} />
      <TextField label="Phone" name="phone" variant="outlined" fullWidth margin="normal" value={details.phone} onChange={handleChange} />
      <Button type="submit" variant="contained" color="primary" className={styles.submit}>Submit</Button>
    </form>
  );
};

export default BookingForm;
