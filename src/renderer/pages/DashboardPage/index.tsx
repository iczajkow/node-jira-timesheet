import * as React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import { User } from "../../../jira-client/models/user";
import "react-day-picker/lib/style.css";
import WorklogSearch from "../../components/WorklogSearch/WorklogSearch";

interface Props {
  user?: User;
  logout?: () => void;
}

const DashboardPage: React.FunctionComponent<Props> = ({ user, logout }) => {
  return (
    <div>
      <AppHeader user={user} logout={logout}>
        <WorklogSearch />
      </AppHeader>
    </div>
  );
};

export default DashboardPage;
