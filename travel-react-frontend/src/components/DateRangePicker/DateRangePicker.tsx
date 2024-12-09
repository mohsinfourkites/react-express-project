import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, Typography } from '@mui/material';
import styles from './DateRangePicker.module.scss';

type DateRange = [Date | null, Date | null];

const DateRangePickerComponent: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const currentDate = new Date();

  const handleDateChange = (value: Date | [Date, Date] | null) => {
    if (Array.isArray(value)) {
      setDateRange(value);
    }
  };

  const tileDisabled = ({ date }: { date: Date }) => {
    return date < new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const [startDate, endDate] = dateRange;

      if (startDate && endDate) {
        if (date.getTime() === startDate.getTime() || date.getTime() === endDate.getTime()) {
          return styles.selectedDate; // Circle for "From" and "To"
        }
        if (date > startDate && date < endDate) {
          return styles.rangeDate; // Continuous bar for in-between dates
        }
      }
    }
    return '';
  };

  return (
    <Box className={styles.container}>
      <Calendar
        selectRange
        value={dateRange}
        onChange={handleDateChange as (value: any) => void}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
      />

      {dateRange[0] && dateRange[1] && (
        <Typography variant="h6" className={styles.selectedDates}>
          Selected Dates: From {dateRange[0].toLocaleDateString()} To {dateRange[1].toLocaleDateString()}
        </Typography>
      )}
    </Box>
  );
};

export default DateRangePickerComponent;
