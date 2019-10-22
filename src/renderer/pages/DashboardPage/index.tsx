import * as React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import { User } from "../../../jira-client/models/user";

interface Props {
  user?: User;
  logout?: () => void;
}

const DashboardPage: React.FunctionComponent<Props> = ({ user, logout }) => {
  return <AppHeader user={user} logout={logout} />;
};

export default DashboardPage;
