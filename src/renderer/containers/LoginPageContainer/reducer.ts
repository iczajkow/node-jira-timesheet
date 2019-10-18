import { Reducer } from "redux";
import { LoginActions, LoginActionType } from "./actions";

export interface LoginState {
  error: any;
  isLoggingIn: boolean;
  isLoadingCachedUser: boolean;
}

const defaultState: LoginState = {
  error: null,
  isLoggingIn: false,
  isLoadingCachedUser: false
};

const loginReducer: Reducer<LoginState> = (
  state = defaultState,
  action: LoginActions
) => {
  switch (action.type) {
    case LoginActionType.Login:
      return { ...state, isLoggingIn: true, isLoadingCachedUser: false };
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
