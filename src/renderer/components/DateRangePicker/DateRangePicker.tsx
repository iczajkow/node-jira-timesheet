import * as React from "react";
import { useState } from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { DateRangeModel } from "./DateRangeModel";

interface Props {
  initDateRange?: DateRangeModel;
  onDateRangeChange?: (value: DateRangeModel) => void;
}

const DateRangePicker: React.FunctionComponent<Props> = ({
  initDateRange,
  onDateRangeChange
}) => {
  let toDatePicker: any = undefined;

  const [dateRange, setRange] = useState({
    from: initDateRange && initDateRange.from,
    to: initDateRange && initDateRange.to
  });

  const handleFromChange = (from: any) => {
    setRange({ ...dateRange, from });
    onDateRangeChange && onDateRangeChange(dateRange);
  };

  const handleToChange = (to: any) => {
    setRange({ ...dateRange, to });
    onDateRangeChange && onDateRangeChange(dateRange);
  };

  const modifiers = { start: dateRange.from, end: dateRange.to };

  return (
    <div className="InputFromTo">
      <DayPickerInput
        value={dateRange.from}
        placeholder="From"
        format="LL"
        dayPickerProps={{
          selectedDays: [dateRange.from, dateRange],
          disabledDays: { after: dateRange.to },
          toMonth: dateRange.to,
          modifiers,
          numberOfMonths: 2,
          onDayClick: () => toDatePicker.getInput().focus()
        }}
        onDayChange={handleFromChange}
      />
      —
      <span className="InputFromTo-to">
        <DayPickerInput
          ref={el => (toDatePicker = el)}
          value={dateRange.to}
          placeholder="To"
          format="LL"
          dayPickerProps={{
            selectedDays: [dateRange.from, dateRange],
            disabledDays: { before: dateRange.from },
            modifiers,
            month: dateRange.from,
            fromMonth: dateRange.from,
            numberOfMonths: 2
          }}
          onDayChange={handleToChange}
        />
      </span>
    </div>
  );
};

export default DateRangePicker;
