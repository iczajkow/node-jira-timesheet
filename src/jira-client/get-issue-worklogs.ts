import { Issue } from "./models/issue";
import JiraClient = require("jira-connector");
import { IssueWorklog } from "./models/issue-worklog";
import { Worklog } from "./models/worklog";

export const getIssueWorklogs = (
  issues: Issue[],
  client: JiraClient,
  author?: string
): Promise<IssueWorklog[]> => {
  return Promise.all(
    issues.map((issue: any) =>
      client.issue
        .getWorkLogs({ issueId: issue.id })
        .then((worklogResponse: { worklogs: Worklog[] }) => {
          const worklogs = !author
            ? worklogResponse.worklogs
            : worklogResponse.worklogs.filter(
                worklog => worklog.author.displayName === author
              );
          return {
            issueKey: issue.key,
            worklogs
          };
        })
    )
  );
};
