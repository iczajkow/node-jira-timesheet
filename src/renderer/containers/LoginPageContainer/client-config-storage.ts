import { ClientConfig } from "../../../jira-client/models/client-config";

const KEY = "CLIENT_CONFIG";
const EMAIL_KEY = `${KEY}_EMAIL`;
const API_TOKEN_KEY = `${KEY}_API_TOKEN`;
const URL_KEY = `${KEY}_URL`;

const saveIfTruthy = (key: string, value: string) => {
  if (value) {
    localStorage.setItem(key, value);
  }
};

const saveClientConfig = ({ email, apiToken, url }: ClientConfig) => {
  saveIfTruthy(EMAIL_KEY, email);
  saveIfTruthy(API_TOKEN_KEY, apiToken);
  saveIfTruthy(URL_KEY, url);
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

const clearUser = () => {
  localStorage.clear();
};

export const ClientConfigStorage = {
  saveClientConfig,
  loadClientConfig,
  clearUser
};
