import { RangeModifier } from "react-day-picker";
import jiraClientProvider from "../../jira-client-provider";
import { getWorklogs } from "../../../jira-client/get-worklogs";
import { dashboardSearch, dashboardSearchCompleted } from "./actions";
import { IssueWorklog } from "../../../jira-client/models/issue-worklog";
import { mapWoklogIssues } from "./map-worklog-issues";
import { RootState } from "../../reducer";

export const searchWorklogs = (range: RangeModifier) => {
  return (dispatch: any, getState: () => RootState) => {
    const client = jiraClientProvider.getJiraClient();
    dispatch(dashboardSearch(range));
    const user = getState().app.user;
    return getWorklogs({
      from: range.from,
      to: range.to,
      jiraClient: client,
      userName: user.displayName
    }).then((worklogs: IssueWorklog[]) => {
      const isSearching = getState().dashboard.isSearching;
      if (isSearching) {
        return dispatch(dashboardSearchCompleted(mapWoklogIssues(worklogs)));
      }
    });
  };
};
