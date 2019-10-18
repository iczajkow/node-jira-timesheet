import { login, failed, success } from "./actions";
import jiraClientProvider from "../../jira-client-provider";
import { ClientConfig } from "../../../jira-client/models/client-config";
import { User } from "jira-connector/api/user";
import { setUser } from "../../appActions";
import { ClientConfigStorage } from "./client-config-storage";

export const authenticate = (config: ClientConfig) => {
  return (dispatch: any) => {
    dispatch(login());
    ClientConfigStorage.saveClientConfig(config);
    const client = jiraClientProvider.createClient(config);
    return client.myself.getMyself().then(
      (user: User) => {
        dispatch(success(user));
        dispatch(setUser(user));
      },
      (error: any) => dispatch(failed(error))
    );
  };
};