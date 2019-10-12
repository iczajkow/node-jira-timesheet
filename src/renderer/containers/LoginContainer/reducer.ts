import { Reducer } from "redux";
import { LoginActionType, LoginActions } from "./actions";

export interface LoginState {
  error: any;
  isLoggingIn: boolean;
}

const defaultState: LoginState = {
  error: null,
  isLoggingIn: false
};

const loginReducer: Reducer<LoginState> = (
  state = defaultState,
  action: LoginActions
) => {
  switch (action.type) {
    case LoginActionType.Login:
      return { ...state, isLoggingIn: true };
    case LoginActionType.LoginFailed:
      return { ...state, error: action.payload.error, isLoggingIn: false };
    case LoginActionType.LoginSuccess:
      return { ...state, isLoggingIn: false };
    default:
      return state;
  }
};

export default loginReducer;
