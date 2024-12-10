// SelfBookingForm.tsx
import React, { useState } from 'react';
import SelfBookingFormStyles from './SelfBookingForm.module.scss';
import { BookingForm } from './BookingForm';
import { EnquiryForm } from './EnquiryForm';
import { bookingFormSubmit, enquiryFormSubmit } from '../../services/SelfBookingFormService';

const SelfBookingForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'booking' | 'enquiry'>('booking');
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [enquiryError, setEnquiryError] = useState<string | null>(null);
  const [date, setDate] = useState('12-25-2024');
  const [adults, setAdults] = useState(4);
  const [children, setChildren] = useState(3);
  const [healthInsurance, setHealthInsurance] = useState(false);
  const [medicalInsurance, setMedicalInsurance] = useState(false);

  const handleBookingFormSubmit = async (formData: any) => {
    try {
      await bookingFormSubmit(formData);
      // Handle success
      setBookingError(null);
    } catch (error: any) {
      setBookingError(error.message || 'An error occurred while submitting the booking form.');
    }
  };

  const handleEnquiryFormSubmit = async (formData: any) => {
    try {
      await enquiryFormSubmit(formData);
      // Handle success
      setEnquiryError(null);
    } catch (error: any) {
      setEnquiryError(error.message || 'An error occurred while submitting the enquiry form.');
    }
  };

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  const handleAdultsChange = (newAdults: number) => {
    setAdults(newAdults);
  };

  const handleChildrenChange = (newChildren: number) => {
    setChildren(newChildren);
  };

  const handleHealthInsuranceChange = () => {
    setHealthInsurance(!healthInsurance);
  };

  const handleMedicalInsuranceChange = () => {
    setMedicalInsurance(!medicalInsurance);
  };

  return (
    <div className={SelfBookingFormStyles.container}>
        <div className={SelfBookingFormStyles.formTitle}>Please Fill The Form For Price Details</div>
        <div className={SelfBookingFormStyles.line}></div>

      <div className={SelfBookingFormStyles.tabs}>
        <button
          className={`${SelfBookingFormStyles.tab} ${activeTab === 'booking' ? SelfBookingFormStyles.active : ''}`}
          onClick={() => setActiveTab('booking')}
        >
          Booking Form
        </button>
        <button
          className={`${SelfBookingFormStyles.tab} ${activeTab === 'enquiry' ? SelfBookingFormStyles.active : ''}`}
          onClick={() => setActiveTab('enquiry')}
        >
          Enquiry Form
        </button>
      </div>
      <div className={SelfBookingFormStyles.formContainer}>
        {activeTab === 'booking' && (
          <>
            <BookingForm
              date={date}
              adults={adults}
              children={children}
              healthInsurance={healthInsurance}
              medicalInsurance={medicalInsurance}
              onDateChange={handleDateChange}
              onAdultsChange={handleAdultsChange}
              onChildrenChange={handleChildrenChange}
              onHealthInsuranceChange={handleHealthInsuranceChange}
              onMedicalInsuranceChange={handleMedicalInsuranceChange}
              onSubmit={handleBookingFormSubmit}
            />
            {bookingError && (
              <div className={SelfBookingFormStyles.error}>{bookingError}</div>
            )}
          </>
        )}
        {activeTab === 'enquiry' && (
          <>
            <EnquiryForm onSubmit={handleEnquiryFormSubmit} />
            {enquiryError && (
              <div className={SelfBookingFormStyles.error}>{enquiryError}</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SelfBookingForm;