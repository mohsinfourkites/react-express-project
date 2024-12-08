import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range';
import styles from './DateRangePickerNPM.module.scss'; // Import SCSS file
import { tr } from 'date-fns/locale';

const DateRangePickerNPM: React.FC = () => {
  const [selectionRange, setSelectionRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges: RangeKeyDict) => {
    console.log(ranges.selection);
    setSelectionRange(ranges.selection);
  };

  return (
    <div className={styles.wrapper}>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        showMonthAndYearPickers={true}
        showDateDisplay={true}
        months={1}
        direction="horizontal"
            // staticRanges={[]} // Remove predefined ranges like "Today" or "Weekend"
            // inputRanges={[]} // Remove custom input fields
      />
    </div>
  );
};

export default DateRangePickerNPM;
