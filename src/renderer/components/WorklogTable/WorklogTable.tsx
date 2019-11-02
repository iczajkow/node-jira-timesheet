import * as React from "react";
import Table from "react-bootstrap/Table";
import { Row } from "../../models/row";
import WorklogRow from "../WorklogRow/WorklogRow";
import { formatDuration } from "../../../utils/format-duration";

const WorklogTable: React.FunctionComponent<{ rows?: Row[] }> = ({ rows }) => {
  const total = rows.reduce(
    (previousValue, row) => previousValue + row.total,
    0
  );
  return (
    <Table striped={true} bordered={true} hover={true}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Total ({formatDuration(total)})</th>
          <th>Issues</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => {
          return <WorklogRow key={row.date.toISOString()} row={row} />;
        })}
      </tbody>
    </Table>
  );
};

export default WorklogTable;
