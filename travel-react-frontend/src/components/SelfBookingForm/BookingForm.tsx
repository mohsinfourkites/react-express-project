// BookingForm.tsx
import React from 'react';
import { BookingFormProps } from './types';
import styles from './BookingForm.module.scss';
import DateRangePickerComponent from '../DateRangePicker/DateRangePicker';

export const BookingForm: React.FC<BookingFormProps> = ({
  date,
  adults,
  children,
  healthInsurance,
  medicalInsurance,
  onDateChange,
  onAdultsChange,
  onChildrenChange,
  onHealthInsuranceChange,
  onMedicalInsuranceChange,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gather form data and call the onSubmit callback
    const formData = {
      date,
      adults,
      children,
      healthInsurance,
      medicalInsurance,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className ={styles.DateContainer}>
        <div className ={styles.DateTitle}>
        <label className={styles.Date} htmlFor="date">Date:</label>
        </div>
        <button className={styles.DateButton} type="button" onClick={() => <DateRangePickerComponent/>}>
            Click To Select Dates</button>       
      </div>
      <div className={styles.line}></div>
      <div>
        <label htmlFor="adults">Adults:</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => onAdultsChange(parseInt(e.target.value))}
        />
      </div>
      <div className={styles.line}></div>
      <div>
        <label htmlFor="children">Children:</label>
        <input
          type="number"
          id="children"
          value={children}
          onChange={(e) => onChildrenChange(parseInt(e.target.value))}
        />
      </div>
      <div className={styles.line}></div>
      <div>
        <label htmlFor="health-insurance">
          <input
            type="checkbox"
            id="health-insurance"
            checked={healthInsurance}
            onChange={onHealthInsuranceChange}
          />
          Health Insurance
        </label>
      </div>
      <div className={styles.line}></div>
      <div>
        <label htmlFor="medical-insurance">
          <input
            type="checkbox"
            id="medical-insurance"
            checked={medicalInsurance}
            onChange={onMedicalInsuranceChange}
          />
          Medical Insurance
        </label>
      </div>
      <div className={styles.line}></div>
      <button type="submit">Submit Booking</button>
    </form>
  );
};