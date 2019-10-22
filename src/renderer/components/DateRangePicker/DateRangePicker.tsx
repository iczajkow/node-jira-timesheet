import * as React from "react";
import { useState } from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./DateRangePicker.scss";
import { RangeModifier } from "react-day-picker/types/common";

interface Props {
  range?: RangeModifier;
  onDateRangeChange?: (value: RangeModifier) => void;
}

const DateRangePicker: React.FunctionComponent<Props> = ({
  range,
  onDateRangeChange
}) => {
  let toDatePicker: any = undefined;

  const [dateRange, setRange] = useState({
    from: range && range.from,
    to: range && range.to
  });

  const handleFromChange = (from: any) => {
    setRange({ ...dateRange, from });
    onDateRangeChange && onDateRangeChange({ ...dateRange, from });
  };

  const handleToChange = (to: any) => {
    setRange({ ...dateRange, to });
    onDateRangeChange && onDateRangeChange({ ...dateRange, to });
  };

  const modifiers = { start: dateRange.from, end: dateRange.to };

  return (
    <div className="InputFromTo">
      <DayPickerInput
        value={dateRange.from}
        placeholder="From"
        format="dd.MM.yyyy"
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
      <span className="date-range__space">-</span>
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
