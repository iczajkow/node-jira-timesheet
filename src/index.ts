import { jiraClientFactory } from "./jira-client/jira-client-factory";
import { ClientConfig } from "./jira-client/client-config";
import { searchIssues } from "./jira-client/search-issues";
const config: ClientConfig = require("./appconfig.json");

(async () => {
  const client = jiraClientFactory(config);

  const result = await searchIssues(
    client,
    new Date(),
    new Date(),
    "Igor Czajkowski"
  );
  console.log(result);
})();
