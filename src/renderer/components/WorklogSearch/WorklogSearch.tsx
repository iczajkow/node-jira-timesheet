import * as React from "react";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./WorklogSearch.scss";
import { RangeModifier } from "react-day-picker/types/common";

interface Props {
  isSearching?: boolean;
  dateRange?: RangeModifier;
  search?: (dateRange: RangeModifier) => void;
}

const WorklogSearch: React.FunctionComponent<Props> = ({
  isSearching,
  dateRange,
  search
}) => {
  const [searchRange, setSearchRange] = React.useState({
    from: dateRange && dateRange.from,
    to: dateRange && dateRange.to
  });

  const onSearch = () => {
    search(searchRange);
  };

  const canSearch = searchRange.from && searchRange.to && !isSearching;

  return (
    <div className="worklog-search">
      <div className="worklog-search__date-range">
        <DateRangePicker range={dateRange} onDateRangeChange={setSearchRange} />
      </div>
      <Button
        variant="outline-success"
        size="sm"
        disabled={!canSearch}
        onClick={onSearch}
      >
        {isSearching && (
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        <span>{isSearching ? "Searching..." : "Search"}</span>
      </Button>
    </div>
  );
};

export default WorklogSearch;
