import { Issue } from "./models/issue";
import JiraClient = require("jira-connector");

export const getIssueWorklogs = (issues: Issue[], client: JiraClient) => {
  return Promise.all(
    issues.map((issue: any) =>
      client.issue
        .getWorkLogs({ issueId: issue.id })
        .then((worklogResponse: any) => ({
          issueKey: issue.key,
          worklogs: worklogResponse.worklogs
        }))
    )
  );
};
