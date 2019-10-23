import { IssueWorklog } from "../../../jira-client/models/issue-worklog";
import { WorklogData } from "../../models/worklog-data";
import * as moment from "moment";

export const mapWoklogIssues = (
  issueWorklogs: IssueWorklog[]
): WorklogData[] => {
  const result: WorklogData[] = [];
  issueWorklogs.forEach(issueWorklog => {
    issueWorklog.worklogs.forEach(worklog => {
      result.push({
        day: moment(worklog.started).toDate(),
        issueKey: issueWorklog.issueKey,
        timeSpentSeconds: worklog.timeSpentSeconds
      });
    });
  });
  return result;
};
