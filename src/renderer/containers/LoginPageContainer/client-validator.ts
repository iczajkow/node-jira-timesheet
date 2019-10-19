import { ClientConfig } from "../../../jira-client/models/client-config";

export const valdiateClient = (client: ClientConfig): boolean => {
  return Boolean(client && client.apiToken && client.email && client.url);
};
