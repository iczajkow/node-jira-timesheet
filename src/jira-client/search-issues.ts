import JiraClient = require("jira-connector");

export const searchIssues = (
  client: JiraClient,
  from: Date,
  to: Date,
  author: string
): Promise<any> => {
  const jql = buildJQL(from, to, author);
  return client.search.search({
    jql,
    startAt: 0,
    maxResults: getMaxInt32()
  });
};

const buildJQL = (from: Date, to: Date, author: string) => {
  return `worklogAuthor = "${author}"`;
};

const formatDateForJQL = (date: Date) => {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()}`;
};

const getMaxInt32 = () => {
  return Math.pow(2, 31) - 1;
};
