import { jiraClientFactory } from "../jira-client/jira-client-factory";
import * as JiraClient from "jira-connector";
import { ClientConfig } from "../jira-client/models/client-config";

let jiraClient: JiraClient;

export interface JiraClientProvider {
  getJiraClient: () => JiraClient;
  createClient: (configuration: ClientConfig) => JiraClient;
}

const jiraClientProvider = {
  getJiraClient: () => jiraClient,
  createClient: (configuration: ClientConfig) => {
    jiraClient = jiraClientFactory(configuration);
    return jiraClient;
  }
};

export default jiraClientProvider;
