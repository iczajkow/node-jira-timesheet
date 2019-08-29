import { Issue } from "./models/issue";
import JiraClient = require("jira-connector");
import { IssueWorklog } from "./models/issue-worklog";
import { Worklog } from "./models/worklog";

export const getIssueWorklogs = (
  issues: Issue[],
  client: JiraClient,
  filter?: (worklog: Worklog) => boolean
): Promise<IssueWorklog[]> => {
  return Promise.all(
    issues.map((issue: any) =>
      client.issue
        .getWorkLogs({ issueId: issue.id })
        .then((worklogResponse: { worklogs: Worklog[] }) => {
          const worklogs = worklogResponse.worklogs.filter(
            worklog => !filter || filter(worklog)
          );
          return {
            issueKey: issue.key,
            worklogs
          };
        })
    )
  );
};
