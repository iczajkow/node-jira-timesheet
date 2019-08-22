import { jiraClientFactory } from "./jira-client/jira-client-factory";
import { ClientConfig } from "./jira-client/models/client-config";
import { searchIssues } from "./jira-client/search-issues";
import { toDate } from "./utils/date-utils";
import { getIssueWorklogs } from "./jira-client/get-issue-worklogs";
import { groupIssues } from "./jira-client/group-issues";
const config: ClientConfig = require("./appconfig.json");

(async () => {
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
    "Igor Czajkowski"
  );
  const groupedWorklog = groupIssues(worklogs);
  console.log(groupedWorklog);
})();
