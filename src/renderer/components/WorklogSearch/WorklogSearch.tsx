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
  clear?: () => void;
  cancel?: () => void;
}

const WorklogSearch: React.FunctionComponent<Props> = ({
  isSearching,
  dateRange,
  search,
  clear,
  cancel
}) => {
  const [searchRange, setSearchRange] = React.useState({
    from: dateRange && dateRange.from,
    to: dateRange && dateRange.to
  });

  const onSearch = () => {
    search(searchRange);
  };

  const onCancel = () => {
    if (isSearching) {
      cancel();
    } else {
      clear();
    }
  };

  const canSearch = searchRange.from && searchRange.to && !isSearching;

  return (
    <div className="worklog-search">
      <div className="worklog-search__date-range">
        <DateRangePicker range={dateRange} onDateRangeChange={setSearchRange} />
      </div>
      <div className="worklog-search__buttons">
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
        <Button variant="outline-danger" size="sm" onClick={onCancel}>
          {isSearching ? "Cancel" : "Clear"}
        </Button>
      </div>
    </div>
  );
};

export default WorklogSearch;
