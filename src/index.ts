import { jiraClientFactory } from "./jira-client/jira-client-factory";
import { ClientConfig } from "./jira-client/models/client-config";
import { searchIssues } from "./jira-client/search-issues";
import { getIssueWorklogs } from "./jira-client/get-issue-worklogs";
import { groupIssues } from "./jira-client/group-issues";
import { getWorklogs } from "./jira-client/get-worklogs";
const config: ClientConfig = require("./appconfig.json");

(async () => {
  const result = await getWorklogs({
    config,
    jiraClientFactory,
    searchIssues,
    getIssueWorklogs,
    groupIssues
  });
  console.log({ result });
})();
