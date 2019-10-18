import { ClientConfig } from "../../../jira-client/models/client-config";

const KEY = "CLIENT_CONFIG";
const EMAIL_KEY = `${KEY}_EMAIL`;
const API_TOKEN_KEY = `${KEY}_API_TOKEN`;
const URL_KEY = `${KEY}_URL`;

const saveClientConfig = ({ email, apiToken, url }: ClientConfig) => {
  localStorage.setItem(EMAIL_KEY, email);
  localStorage.setItem(API_TOKEN_KEY, apiToken);
  localStorage.setItem(URL_KEY, url);
};

const loadClientConfig = (): ClientConfig => {
  const email = localStorage.getItem(EMAIL_KEY);
  const apiToken = localStorage.getItem(API_TOKEN_KEY);
  const url = localStorage.getItem(URL_KEY);
  return {
    email,
    apiToken,
    url
  };
};

export const ClientConfigStorage = {
  saveClientConfig,
  loadClientConfig
};
