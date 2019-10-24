import { RangeModifier } from "react-day-picker";
import * as moment from "moment";

export const getDatesBetween = (range: RangeModifier): Date[] => {
  const from = moment(range.from).startOf("day");
  const to = moment(range.to).startOf("day");
  const result: Date[] = [];
  if (from.isAfter(to)) {
    return result;
  }
  let currentDate = from;
  while (currentDate.isSameOrBefore(to)) {
    result.push(currentDate.toDate());
    currentDate = currentDate.add(1, "day");
  }
  return result;
};
