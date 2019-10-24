import * as React from "react";
import Table from "react-bootstrap/Table";
import { Row } from "../../models/row";
import WorklogRow from "../WorklogRow/WorklogRow";

const WorklogTable: React.FunctionComponent<{ rows?: Row[] }> = ({ rows }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Total</th>
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
