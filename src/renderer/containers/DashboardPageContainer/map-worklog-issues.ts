import { IssueWorklog } from "../../../jira-client/models/issue-worklog";
import { WorklogData } from "../../models/worklog-data";
import { fromJiraDate } from "../../../utils/date-utils";

export const mapWoklogIssues = (
  issueWorklogs: IssueWorklog[]
): WorklogData[] => {
  return issueWorklogs.reduce((worklogs, issueWorklog) => {
    const issueWorklogs = issueWorklog.worklogs.map(worklog => ({
      day: fromJiraDate(worklog.started),
      issueKey: issueWorklog.issueKey,
      timeSpentSeconds: worklog.timeSpentSeconds
    }));
    return [...worklogs, ...issueWorklogs];
  }, []);
};
