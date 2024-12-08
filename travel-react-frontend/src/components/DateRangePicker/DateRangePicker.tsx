import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, Button } from '@mui/material';

type DateRange = [Date | null, Date | null];

const DateRangePickerComponent: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);

  const handleDateChange = (value: Date | [Date, Date] | null) => {
    if (value === null) return;

    // Handle range of dates (if value is an array of 2 dates)
    if (Array.isArray(value)) {
      setDateRange(value);
    } else if (value instanceof Date) {
      // Handle single date selection, and determine if it's start or end date
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
      <Calendar
        selectRange
        value={dateRange}
        onChange={handleDateChange as (value: any) => void} // Type-casting to 'any' to bypass type mismatch
      />
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
