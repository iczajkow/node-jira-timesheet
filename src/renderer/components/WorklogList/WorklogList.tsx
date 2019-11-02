import * as React from "react";
import { WorklogData } from "../../models/worklog-data";
import { RangeModifier } from "react-day-picker";
import "./WorklogList.scss";
import WorklogTable from "../WorklogTable/WorklogTable";
import { getRows } from "./get-rows";

interface Props {
  range?: RangeModifier;
  worklogs?: WorklogData[];
}

const WorklogList: React.FunctionComponent<Props> = ({ worklogs, range }) => {
  const rows = getRows(range, worklogs);
  return (
    <div className="worklog__list">
      {worklogs ? (
        <WorklogTable rows={rows} />
      ) : (
        <h2 className="worklog__empty">Nothing to show</h2>
      )}
    </div>
  );
};

export default WorklogList;
