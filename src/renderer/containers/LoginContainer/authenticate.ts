import { login, failed, succes } from "./actions";
import jiraClientProvider from "../../jira-client-provider";
import { ClientConfig } from "../../../jira-client/models/client-config";
import { User } from "jira-connector/api/user";
import { setUser } from "../../appActions";

export const authenticate = (config: ClientConfig) => {
  return (dispatch: any) => {
    dispatch(login());
    const client = jiraClientProvider.createClient(config);
    return client.myself.getMyself().then(
      (user: User) => {
        dispatch(succes(user));
        dispatch(setUser(user));
      },
      (error: any) => dispatch(failed(error))
    );
  };
};
