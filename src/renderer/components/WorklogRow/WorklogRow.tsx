import { Row } from "../../models/row";
import { formatDuration } from "../../../utils/format-duration";
import * as moment from "moment";
import * as React from "react";
import { isWeekend } from "../../../utils/date-utils";

const WORKDAY_SECONDS = 8 * 3600;

const getTableClass = (row: Row) => {
  if (isWeekend(row.date)) {
    return "table-primary";
  }
  return row.total === WORKDAY_SECONDS ? "table-success" : "table-danger";
};

const WorklogRow: React.FunctionComponent<{ row?: Row }> = ({ row }) => {
  const displayDuration = formatDuration(row.total);
  return (
    <tr className={getTableClass(row)} key={row.date.toISOString()}>
      <td>{moment(row.date).format("dddd DD.MM.YYYY")}</td>
      <td>{displayDuration}</td>
      <td>
        {row.issues.map(issue => (
          <div key={issue.key}>
            <span>{issue.key} - </span>
            <span>{formatDuration(issue.time)}</span>
          </div>
        ))}
      </td>
    </tr>
  );
};

export default WorklogRow;
