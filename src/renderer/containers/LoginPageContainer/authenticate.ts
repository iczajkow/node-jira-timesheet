import { login, failed, success } from "./actions";
import jiraClientProvider from "../../jira-client-provider";
import { ClientConfig } from "../../../jira-client/models/client-config";
import { setUser } from "../../appActions";
import { ClientConfigStorage } from "./client-config-storage";
import { loginError } from "./login-error";
import { User } from "../../../jira-client/models/user";

export const authenticate = (config: ClientConfig) => {
  return (dispatch: any) => {
    dispatch(login(config));
    ClientConfigStorage.saveClientConfig(config);
    const client = jiraClientProvider.createClient(config);
    return client.myself.getMyself().then(
      (user: User) => {
        dispatch(success(user));
        dispatch(setUser(user));
      },
      (error: any) => dispatch(failed(loginError(error)))
    );
  };
};
