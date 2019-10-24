import * as React from "react";
import { WorklogData } from "../../models/worklog-data";
import { RangeModifier } from "react-day-picker";
import * as moment from "moment";
import { getDatesBetween } from "./dates-between";
import "./WorklogList.scss";
import WorklogTable from "../WorklogTable/WorklogTable";
import { Row } from "../../models/row";

interface Props {
  range?: RangeModifier;
  worklogs?: WorklogData[];
}

const getRows = (range: RangeModifier, worklogs: WorklogData[]): Row[] => {
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
      { date: date, total: 0, issues: [] }
    );
  });
};

const WorklogList: React.FunctionComponent<Props> = ({ worklogs, range }) => {
  const rows = getRows(range, worklogs);
  return (
    <div className="worklog__list">
      {worklogs ? <WorklogTable rows={rows} /> : "Nothing to show"}
    </div>
  );
};

export default WorklogList;
