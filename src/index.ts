import { jiraClientFactory } from "./jira-client/jira-client-factory";
import { ClientConfig } from "./jira-client/models/client-config";
import { searchIssues } from "./jira-client/search-issues";
import { toDate } from "./utils/date-utils";
import { getIssueWorklogs } from "./jira-client/get-issue-worklogs";
import { groupIssues } from "./jira-client/group-issues";
import { Worklog } from "./jira-client/models/worklog";
import moment = require("moment");
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
    worklog =>
      filterWorklog(
        worklog,
        "Igor Czajkowski",
        toDate(config.from),
        toDate(config.to)
      )
  );
  const groupedWorklog = groupIssues(worklogs);
})();

const filterWorklog = (
  worklog: Worklog,
  name: string,
  from: Date,
  to: Date
) => {
  const isBetween = moment(worklog.started).isBetween(moment(from), moment(to));
  return worklog.author.displayName === name && isBetween;
};
