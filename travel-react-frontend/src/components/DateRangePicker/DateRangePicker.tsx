import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setStartDate, setEndDate } from "../../redux/slices/dateRangeSlice";
import { sendDateRangeToAPI } from "../../redux/actions/dateRangeActions"; // Adjust the import path as needed
import { RootState } from "../../redux/store"; // Adjust the import path as needed
import styles from "./DateRangePicker.module.scss";

type DateRange = [Date | null, Date | null];

const DateRangePickerComponent: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const [activeStartDate, setActiveStartDate] = useState<Date>(new Date());
  const currentDate = new Date();
  const dispatch = useDispatch();

  const startDateString = useSelector((state: RootState) => state.dateRange.startDate);
  const endDateString = useSelector((state: RootState) => state.dateRange.endDate);

  const handleDateChange = (value: Date | [Date, Date] | null) => {
    if (Array.isArray(value)) {
      setDateRange(value);
      dispatch(setStartDate(value[0] ? value[0].toISOString() : null));
      dispatch(setEndDate(value[1] ? value[1].toISOString() : null));
    }
  };

  useEffect(() => {
    if (startDateString && endDateString) {
      sendDateRangeToAPI(startDateString, endDateString);
    }
  }, [startDateString, endDateString]);

  const handleReset = () => {
    setDateRange([null, null]);
    setActiveStartDate(new Date());
    dispatch(setStartDate(null));
    dispatch(setEndDate(null));
  };

  const tileDisabled = ({ date }: { date: Date }) => {
    return (
      date < new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    );
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const [startDate, endDate] = dateRange;

      if (startDate && endDate) {
        if (
          date.getTime() === startDate.getTime() ||
          date.getTime() === endDate.getTime()
        ) {
          return styles.selectedDate; // Circle for "From" and "To"
        }
        if (date > startDate && date < endDate) {
          return styles.rangeDate; // Continuous bar for in-between dates
        }
      }
    }
    return "";
  };

  return (
    <Box className={styles.container}>
      <Calendar
        selectRange
        value={dateRange}
        onChange={handleDateChange as (value: any) => void}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate || new Date())}
      />

      <div className={styles.selectedDatesBox}>
        <div className={styles.selectedDatesText}>Selected Dates</div>
        <div className={styles.selectedDatesFromToBox}>
          <div className={styles.selectedDatesFrom}>
            From: {dateRange[0] ? dateRange[0].toLocaleDateString() : "Please Select Check In"}
          </div>
          <div className={styles.selectedDatesTo}>
            To: {dateRange[1] ? dateRange[1].toLocaleDateString() : "Please Select Check Out"}
          </div>
        </div>
        <Button onClick={handleReset} className={styles.resetButton}>
          Reset
        </Button>
      </div>
    </Box>
  );
};

export default DateRangePickerComponent;