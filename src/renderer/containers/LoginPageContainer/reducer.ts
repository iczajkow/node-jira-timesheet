import { Reducer } from "redux";
import { LoginActions, LoginActionType } from "./actions";
import { LoginError } from "./login-error";
import { ClientConfig } from "../../../jira-client/models/client-config";

export interface LoginState {
  error: LoginError;
  clientConfig: ClientConfig;
  isLoggingIn: boolean;
  isLoadingCachedUser: boolean;
}

const defaultState: LoginState = {
  error: null,
  clientConfig: null,
  isLoggingIn: false,
  isLoadingCachedUser: false
};

const loginReducer: Reducer<LoginState> = (
  state = defaultState,
  action: LoginActions
) => {
  switch (action.type) {
    case LoginActionType.Login:
      return {
        ...state,
        isLoggingIn: true,
        clientConfig: action.payload.clientConfig
      };
    case LoginActionType.LoginFailed:
      return {
        ...state,
        error: action.payload.error,
        isLoggingIn: false,
        isLoadingCachedUser: false
      };
    case LoginActionType.LoginSuccess:
      return { ...state, isLoggingIn: false, isLoadingCachedUser: false };
    case LoginActionType.LoadCachedUser:
      return { ...state, isLoadingCachedUser: true };
    default:
      return state;
  }
};

export default loginReducer;
