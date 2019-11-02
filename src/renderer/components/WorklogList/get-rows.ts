import { RangeModifier } from "react-day-picker";
import { WorklogData } from "../../models/worklog-data";
import { Row } from "../../models/row";
import { getDatesBetween } from "./dates-between";
import * as moment from "moment";

export const getRows = (
  range: RangeModifier,
  worklogs: WorklogData[]
): Row[] => {
  if (!range || !worklogs) {
    return [];
  }

  const dates = getDatesBetween(range);
  return dates.map(date => {
    const issuesForDate = worklogs.filter(worklog =>
      moment(worklog.day).isSame(moment(date), "day")
    );
    return issuesForDate.reduce(
      (previousValue: Row, currentValue: WorklogData) => {
        return {
          ...previousValue,
          total: previousValue.total + currentValue.timeSpentSeconds,
          issues: [
            ...previousValue.issues,
            { key: currentValue.issueKey, time: currentValue.timeSpentSeconds }
          ]
        };
      },
      { date, total: 0, issues: [] }
    );
  });
};
