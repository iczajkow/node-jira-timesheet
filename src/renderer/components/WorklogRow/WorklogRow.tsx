import { Row } from "../../models/row";
import { formatDuration } from "../../../utils/format-duration";
import * as moment from "moment";
import * as React from "react";

const WorklogRow: React.FunctionComponent<{ row?: Row }> = ({ row }) => {
  const displayDuration = formatDuration(row.total);
  return (
    <tr key={row.date.toISOString()}>
      <td>{moment(row.date).format("DD.MM.YYYY")}</td>
      <td>{displayDuration}</td>
      <td>
        {row.issues.map(issue => (
          <div>
            <span>{issue.key} - </span>
            <span>{formatDuration(issue.time)}</span>
          </div>
        ))}
      </td>
    </tr>
  );
};

export default WorklogRow;
