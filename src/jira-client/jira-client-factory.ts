import { ClientConfig } from "./client-config";
import JiraClient = require("jira-connector");

export const jiraClientFactory = (config: ClientConfig) => {
  return new JiraClient({
    host: config.url,
    basic_auth: {
      email: config.email,
      api_token: config.apiToken
    }
  });
};
