import moment = require("moment");
import { ClientConfig } from "./models/client-config";
import JiraClient = require("jira-connector");
import { IssuesResponse, IssueResponse } from "./models/issues-response";
import { Issue } from "jira-connector/api/issue";
import { IssueWorklog } from "./models/issue-worklog";
import { Worklog } from "./models/worklog";
import { toDate } from "../utils/date-utils";

export interface WorklogClientInput {
  config: ClientConfig;
  jiraClientFactory: (config: ClientConfig) => JiraClient;
  searchIssues: (
    client: JiraClient,
    from: Date,
    to: Date,
    author: string
  ) => Promise<IssuesResponse>;
  getIssueWorklogs: (
    issues: IssueResponse[],
    client: JiraClient,
    filter?: (worklog: Worklog) => boolean
  ) => Promise<IssueWorklog[]>;
  groupIssues: (issueWorklogs: IssueWorklog[]) => { [key: string]: Worklog[] };
}

export const getWorklogs = async ({
  config,
  jiraClientFactory,
  searchIssues,
  getIssueWorklogs,
  groupIssues
}: WorklogClientInput) => {
  const client = jiraClientFactory(config);
  const from = toDate(config.from);
  const to = toDate(config.to);

  const issuesResponse = await searchIssues(
    client,
    from,
    to,
    "Igor Czajkowski"
  );

  const worklogs = await getIssueWorklogs(
    issuesResponse.issues,
    client,
    worklog =>
      filterWorklog(
        worklog,
        "Igor Czajkowski",
        toDate(config.from),
        toDate(config.to)
      )
  );
  return groupIssues(worklogs);
};

const filterWorklog = (
  worklog: Worklog,
  name: string,
  from: Date,
  to: Date
) => {
  const isBetween = moment(worklog.started).isBetween(moment(from), moment(to));
  return worklog.author.displayName === name && isBetween;
};
