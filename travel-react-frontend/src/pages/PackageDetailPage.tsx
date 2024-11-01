import React from 'react';
import BookingForm from '../components/BookingForm';
import ImageCarousel from '../components/ImageCarousel';

const PackageDetailPage: React.FC = () => (
  <div>
    <ImageCarousel />
    <h1 className="text-2xl font-bold mt-6">Package Details</h1>
    {/* Display package details */}
    <BookingForm />
  </div>
);

export default PackageDetailPage;
