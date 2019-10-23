import { RangeModifier } from "react-day-picker";
import jiraClientProvider from "../../jira-client-provider";
import { getWorklogs } from "../../../jira-client/get-worklogs";
import { dashboardSearch, dashboardSearchCompleted } from "./actions";
import { IssueWorklog } from "../../../jira-client/models/issue-worklog";
import { mapWoklogIssues } from "./map-worklog-issues";

export const searchWorklogs = (range: RangeModifier) => {
  return (dispatch: any) => {
    const client = jiraClientProvider.getJiraClient();
    dispatch(dashboardSearch(range));
    return getWorklogs({
      from: range.from,
      to: range.to,
      jiraClient: client
    }).then((worklogs: IssueWorklog[]) =>
      dispatch(dashboardSearchCompleted(mapWoklogIssues(worklogs)))
    );
  };
};
