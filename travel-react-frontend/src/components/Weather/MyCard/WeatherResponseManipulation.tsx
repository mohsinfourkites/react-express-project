// WeatherResponseManipulation.tsx
import React from 'react';

interface WeatherResponseManipulationProps {
  dateTime: string;
}

const WeatherResponseManipulation: React.FC<WeatherResponseManipulationProps> = ({ dateTime }) => {
  const formatDate = (dateTime: string): string => {
    const date = new Date(dateTime);
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: '2-digit', month: 'short' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const [weekday, month, day] = formattedDate.split(' ');
    return `${weekday} ${day} ${month}`;
  };

  return <>{formatDate(dateTime)}</>;
};

export default WeatherResponseManipulation;