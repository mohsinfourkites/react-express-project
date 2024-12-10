// SelfBookingFormService.tsx
import axios, { AxiosError } from 'axios';

export const bookingFormSubmit = async (formData: any) => {
  try {
    await axios.post('/api/booking', formData);
  } catch (error: AxiosError | any) {
    throw new Error(error.response?.data?.message || 'An error occurred while submitting the booking form.');
  }
};

export const enquiryFormSubmit = async (formData: any) => {
  try {
    await axios.post('/api/enquiry', formData);
  } catch (error: AxiosError | any) {
    throw new Error(error.response?.data?.message || 'An error occurred while submitting the enquiry form.');
  }
};