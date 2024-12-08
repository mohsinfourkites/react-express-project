import React, { forwardRef, HTMLAttributes, ChangeEvent } from "react";
import {
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import {
  addYears,
  format,
  isSameMonth,
  getMonth,
  getYear,
  setMonth,
  setYear,
} from "date-fns";
import {
  DayPicker,
  useDayPicker,
  useDayRender,
  useNavigation,
  type DayPickerRangeProps,
  type DayPickerSingleProps,
  type DayProps,
  type Matcher,
} from "react-day-picker";

import { cn } from "@/lib/utils/classes";
import { focusRing } from "../EldoraUi.util";

interface NavigationButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  icon: React.ElementType;
  disabled?: boolean;
}

const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ onClick, icon, disabled, ...props }, ref) => {
    const Icon = icon;
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded border p-1 outline-none transition sm:size-[30px]",
          // text color
          "text-gray-600 hover:text-gray-800",
          "dark:text-gray-400 hover:dark:text-gray-200",
          // border color
          "border-gray-300 dark:border-gray-800",
          // background color
          "hover:bg-gray-50 active:bg-gray-100",
          "hover:dark:bg-gray-900 active:dark:bg-gray-800",
          // disabled
          "disabled:pointer-events-none",
          "disabled:border-gray-200 disabled:dark:border-gray-800",
          "disabled:text-gray-400 disabled:dark:text-gray-600",
          focusRing
        )}
        onClick={onClick}
        {...props}
      >
        <Icon className="size-full shrink-0" />
      </button>
    );
  }
);

NavigationButton.displayName = "NavigationButton";

type OmitKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type KeysToOmit = "showWeekNumber" | "captionLayout" | "mode";

type SingleProps = OmitKeys<DayPickerSingleProps, KeysToOmit>;
type RangeProps = OmitKeys<DayPickerRangeProps, KeysToOmit>;

type CalendarProps =
  | ({ mode: "single" } & SingleProps)
  | ({ mode?: undefined } & SingleProps)
  | ({ mode: "range" } & RangeProps);

const Calendar: React.FC<
  CalendarProps & {
    enableYearNavigation?: boolean;
    captionLayout?: "buttons" | "dropdown-buttons";
  }
> = ({
  mode = "single",
  weekStartsOn = 1,
  numberOfMonths = 1,
  enableYearNavigation = false,
  disableNavigation,
  locale,
  className,
  classNames,
  captionLayout = "buttons",
  ...props
}) => {
  return (
    <DayPicker
      mode={mode}
      weekStartsOn={weekStartsOn}
      numberOfMonths={numberOfMonths}
      locale={locale}
      showOutsideDays={numberOfMonths === 1}
      className={cn(className)}
      classNames={{
        months: "flex space-y-0",
        month: "space-y-4 p-3",
        nav: "gap-1 flex items-center rounded-full size-full justify-between p-4",
        table: "w-full border-collapse space-y-1",
        head_cell:
          "w-9 font-medium text-sm sm:text-xs text-center text-gray-400 dark:text-gray-600 pb-2",
        row: "w-full mt-0.5",
        cell: cn(
          "relative p-0 text-center focus-within:relative",
          "text-gray-900 dark:text-gray-50"
        ),
        day: cn(
          "size-9 rounded text-sm text-gray-900 dark:text-gray-50",
          "hover:bg-gray-200 hover:dark:bg-gray-700",
          focusRing
        ),
        day_today: "font-semibold",
        day_selected: cn(
          "rounded",
          "aria-selected:bg-gray-900 aria-selected:text-gray-50",
          "dark:aria-selected:bg-gray-50 dark:aria-selected:text-gray-900"
        ),
        day_disabled:
          "!text-gray-300 dark:!text-gray-700 line-through disabled:hover:bg-transparent",
        day_outside: "text-gray-400 dark:text-gray-600",
        day_range_middle: cn(
          "!rounded-none",
          "aria-selected:!bg-gray-100 aria-selected:!text-gray-900",
          "dark:aria-selected:!bg-gray-900 dark:aria-selected:!text-gray-50"
        ),
        day_range_start: "rounded-r-none !rounded-l",
        day_range_end: "rounded-l-none !rounded-r",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => (
          <RiArrowLeftSLine aria-hidden="true" className="size-4" />
        ),
        IconRight: () => (
          <RiArrowRightSLine aria-hidden="true" className="size-4" />
        ),
        Caption: (captionProps) => {
          const {
            goToMonth,
            nextMonth,
            previousMonth,
            currentMonth,
            displayMonths,
          } = useNavigation();
          const {
            numberOfMonths,
            fromDate,
            toDate,
            fromYear,
            fromMonth,
            toMonth,
            toYear,
          } = useDayPicker();

          const displayIndex = displayMonths.findIndex((month) =>
            isSameMonth(captionProps.displayMonth, month)
          );
          const isFirst = displayIndex === 0;
          const isLast = displayIndex === displayMonths.length - 1;

          const goToPreviousYear = () => goToMonth(addYears(currentMonth, -1));
          const goToNextYear = () => goToMonth(addYears(currentMonth, 1));

          return (
            <div className="flex items-center justify-between">
              {captionLayout === "dropdown-buttons" && (
                <>
                  <NavigationButton
                    onClick={goToPreviousYear}
                    icon={RiArrowLeftDoubleLine}
                  />
                  <NavigationButton
                    onClick={goToNextYear}
                    icon={RiArrowRightDoubleLine}
                  />
                </>
              )}
            </div>
          );
        },
        Day: ({ date, displayMonth }: DayProps) => {
          const { activeModifiers, buttonProps } = useDayRender(
            date,
            displayMonth
          );
          return <button {...buttonProps} />;
        },
      }}
      {...(props as SingleProps & RangeProps)}
    />
  );
};

Calendar.displayName = "Calendar";

export { Calendar, type Matcher };
