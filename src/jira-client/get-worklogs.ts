import * as moment from "moment";
import * as JiraClient from "jira-connector";
import { Worklog } from "./models/worklog";
import { searchIssues } from "./search-issues";
import { getIssueWorklogs } from "./get-issue-worklogs";

export interface WorklogClientInput {
  from: Date;
  to: Date;
  jiraClient: JiraClient;
}

export const getWorklogs = async ({
  from,
  to,
  jiraClient
}: WorklogClientInput) => {
  const issuesResponse = await searchIssues(
    jiraClient,
    from,
    to,
    "Igor Czajkowski"
  );

  const worklogs = await getIssueWorklogs(
    issuesResponse.issues,
    jiraClient,
    worklog => filterWorklog(worklog, "Igor Czajkowski", from, to)
  );

  return worklogs;
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
