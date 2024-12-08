import { NextUIProvider } from "@nextui-org/react";

import {DateRangePicker} from "@nextui-org/date-picker";
function DateRangePickerNextUI() {
  return (
    <NextUIProvider>
      <DateRangePicker className="max-w-xs" label="Stay duration" />
    </NextUIProvider>
  );
}

export default DateRangePickerNextUI;
