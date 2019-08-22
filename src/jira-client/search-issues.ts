import JiraClient = require("jira-connector");
import { toJiraDateFormat } from "../utils/date-utils";
import { IssuesResponse } from "./models/issues-response";

export const searchIssues = (
  client: JiraClient,
  from: Date,
  to: Date,
  author: string
): Promise<IssuesResponse> => {
  const jql = buildJQL(from, to, author);
  return client.search.search({
    jql,
    startAt: 0,
    maxResults: getMaxInt32()
  });
};

const buildJQL = (from: Date, to: Date, author: string) => {
  return `worklogAuthor = "${author}" AND worklogDate >= "${toJiraDateFormat(
    from
  )}" AND worklogDate <= "${toJiraDateFormat(to)}"`;
};

const getMaxInt32 = () => {
  return Math.pow(2, 31) - 1;
};
