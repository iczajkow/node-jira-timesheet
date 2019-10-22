import * as React from "react";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import Button from "react-bootstrap/Button";
import "./WorklogSearch.scss";

const WorklogSearch: React.FunctionComponent = () => {
  return (
    <div className="worklog-search">
      <div className="worklog-search__date-range">
        <DateRangePicker />
      </div>
      <Button variant="outline-success" size="sm">
        Search
      </Button>
    </div>
  );
};

export default WorklogSearch;
