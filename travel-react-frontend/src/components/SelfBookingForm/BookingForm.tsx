import React, { useState } from 'react';
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
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.DateContainer}>
        <div className={styles.DateTitle}>
          <label className={styles.Date} htmlFor="date">Date:</label>
        </div>
        <button className={styles.DateButton} type="button" onClick={toggleDatePicker}>
          Click To Select Dates
        </button>
        {showDatePicker && (
          <div className={styles.DatePickerPopup}>
            <DateRangePickerComponent />
          </div>
        )}
      </div>
      <div className={styles.line}></div>
      <div className={styles.adultsAgeContaier}>
        <label htmlFor="adults">Adults:</label>
        <div className={styles.adultsAgeInput}>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => onAdultsChange(parseInt(e.target.value))}
          size={1}
        />
        </div>
      </div>
      
      <div className={styles.line}></div>
      <div>
      <div className={styles.ChildrenAgeContaier}>
        <label htmlFor="children">Children:</label>
        <div className={styles.childrenAgeInput}>
        <input
          type="number"
          id="children"
          value={children}
          onChange={(e) => onChildrenChange(parseInt(e.target.value))}
        />
        </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div>
        <div className={styles.extraServices}>
            Extra Services:
            </div>
            <div className={styles.extraServicesDescription}>
            Add extra services on your reservation
            </div>
      <div className={styles.healthContaier}>
        <label htmlFor="health-insurance">
        <div className={styles.healthContaierInput}>
          <input
            type="checkbox"
            id="health-insurance"
            checked={healthInsurance}
            onChange={onHealthInsuranceChange}
          />
          </div>
          Health Insurance
        </label>
        </div>
      </div>
      {/* <div className={styles.line}></div> */}
      <div>
      <div className={styles.medicalContaier}>
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
      </div>
      {/* <div className={styles.line}></div> */}
      <div className={styles.adultsAgeContaier}>
      <button type="submit">Submit Booking</button>
      </div>
    </form>

  );
};