import * as React from "react";
import { WorklogData } from "../../models/worklog-data";
import { RangeModifier } from "react-day-picker";
import * as moment from "moment";

interface Props {
  range?: RangeModifier;
  worklogs?: WorklogData[];
}

const getDatesBetween = (range: RangeModifier): Date[] => {
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

const getRows = (
  range: RangeModifier,
  worklogs: WorklogData[],
  issueKeys: string[]
) => {
  if (range) {
    console.log(getDatesBetween(range));
  }
};

const WorklogList: React.FunctionComponent<Props> = ({ worklogs, range }) => {
  const uniqueIssues = (worklogs || [])
    .map(worklog => worklog.issueKey)
    .filter((worklog, index, array) => array.indexOf(worklog) === index);
  console.log(uniqueIssues);
  getRows(range, worklogs, uniqueIssues);
  return (
    <pre>
      {worklogs ? JSON.stringify(worklogs, null, 4) : "Nothing to show"}
    </pre>
  );
};

export default WorklogList;
