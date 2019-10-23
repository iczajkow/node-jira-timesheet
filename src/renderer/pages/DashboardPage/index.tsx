import * as React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import { User } from "../../../jira-client/models/user";
import "react-day-picker/lib/style.css";
import WorklogSearch from "../../components/WorklogSearch/WorklogSearch";
import { RangeModifier } from "react-day-picker/types/common";
import "./index.scss";
import WorklogList from "../../components/WorklogList/WorklogList";
import DashboardLoader from "../../components/DashboardLoader/DashboardLoader";
import { WorklogData } from "../../models/worklog-data";

interface Props {
  user?: User;
  isSearching?: boolean;
  searchRange: RangeModifier;
  worklogData?: WorklogData[];
  logout?: () => void;
  search?: (range: RangeModifier) => void;
}

const DashboardPage: React.FunctionComponent<Props> = ({
  user,
  isSearching,
  searchRange,
  worklogData,
  logout,
  search
}) => {
  return (
    <div className="dashboard__page">
      <AppHeader user={user} logout={logout}>
        <WorklogSearch search={search} isSearching={isSearching} />
      </AppHeader>
      <div className="dashboard__content">
        {isSearching ? (
          <DashboardLoader />
        ) : (
          <WorklogList worklogs={worklogData} range={searchRange} />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
