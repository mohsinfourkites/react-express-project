import React, { useState, useEffect } from 'react';

const CalendarDateNow: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState({
    formattedDate: '',
    formattedTime: '',
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const formattedDateParts = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        day: '2-digit',   
        month: 'long',    
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }).formatToParts(now);

      const day = formattedDateParts.find((part) => part.type === 'weekday')?.value;
      const date = formattedDateParts.find((part) => part.type === 'day')?.value;
      const month = formattedDateParts.find((part) => part.type === 'month')?.value;
      const hour = formattedDateParts.find((part) => part.type === 'hour')?.value;
      const minute = formattedDateParts.find((part) => part.type === 'minute')?.value;
      const second = formattedDateParts.find((part) => part.type === 'second')?.value;

      setCurrentDateTime({
        formattedDate: `${day} ${date}, ${month}`,
        formattedTime: `${hour}:${minute}:${second}`,
      });
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <>
      <p>{currentDateTime.formattedDate}</p>
      {/* <p>{currentDateTime.formattedTime}</p> */}
    </>
  );
};

export default CalendarDateNow;
