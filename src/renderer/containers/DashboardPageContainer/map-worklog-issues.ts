import { IssueWorklog } from "../../../jira-client/models/issue-worklog";
import { WorklogData } from "../../models/worklog-data";
import * as moment from "moment";

export const mapWoklogIssues = (
  issueWorklogs: IssueWorklog[]
): WorklogData[] => {
  return issueWorklogs.reduce((worklogs, issueWorklog) => {
    const issueWorklogs = issueWorklog.worklogs.map(worklog => ({
      day: moment(worklog.started).toDate(),
      issueKey: issueWorklog.issueKey,
      timeSpentSeconds: worklog.timeSpentSeconds
    }));
    return [...worklogs, ...issueWorklogs];
  }, []);
};
