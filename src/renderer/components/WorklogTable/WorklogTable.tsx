import * as React from "react";
import Table from "react-bootstrap/Table";
import * as moment from "moment";
import { Row } from "../../models/row";

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
          const hours = Math.floor(row.total / 3600);
          const minutes = Math.floor((row.total / 60) % 60);
          const stringMinutes = minutes < 10 ? `0${minutes}` : minutes;
          const displayDuration = `${hours}:${stringMinutes}`;
          return (
            <tr key={row.date.toISOString()}>
              <td>{moment(row.date).format("DD.MM.YYYY")}</td>
              <td>{displayDuration}</td>
              <td>{JSON.stringify(row.issues)}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default WorklogTable;
