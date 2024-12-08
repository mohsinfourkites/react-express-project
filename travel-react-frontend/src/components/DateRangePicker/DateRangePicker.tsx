import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, Button } from '@mui/material';
import styles from './DateRangePicker.module.scss'; // Import the module SCSS file

type DateRange = [Date | null, Date | null];

const DateRangePickerComponent: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);

  const handleDateChange = (value: Date | [Date, Date] | null) => {
    if (value === null) return;

    if (Array.isArray(value)) {
      setDateRange(value);
    } else if (value instanceof Date) {
      const [startDate, endDate] = dateRange;

      if (!startDate || (startDate && value < startDate)) {
        setDateRange([value, endDate]);
      } else {
        setDateRange([startDate, value]);
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
      <div className={styles['calendar-container']}>
        <Calendar
          selectRange
          value={dateRange}
          onChange={handleDateChange as (value: any) => void}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={() => {
          if (dateRange[0] && dateRange[1]) {
            console.log('Selected Date Range:', dateRange);
          } else {
            console.log('Please select a valid date range');
          }
        }}
      >
        Submit Date Range
      </Button>
    </Box>
  );
};

export default DateRangePickerComponent;
