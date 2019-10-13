import { PayloadAction } from "../../models/payloadAction";
import { ActionCreator, AnyAction } from "redux";
import { User } from "jira-connector/api/user";

export enum LoginActionType {
  Login = "LOGIN_LOGIN",
  LoginSuccess = "LOGIN_LOGIN_SUCCESS",
  LoginFailed = "LOGIN_LOGIN_FAILED"
}

export interface LoginAction extends AnyAction {
  type: LoginActionType.Login;
}

export interface LoginSuccess extends PayloadAction<User> {
  type: LoginActionType.LoginSuccess;
  payload: { user: User };
}

export interface LoginFailed extends PayloadAction<any> {
  type: LoginActionType.LoginFailed;
  payload: { error: any };
}

export type LoginActions = LoginAction | LoginSuccess | LoginFailed;

export const login: ActionCreator<LoginAction> = () => ({
  type: LoginActionType.Login
});

export const succes: ActionCreator<LoginSuccess> = (user: User) => ({
  type: LoginActionType.LoginSuccess,
  payload: { user }
});

export const failed: ActionCreator<LoginFailed> = (error: any) => ({
  type: LoginActionType.LoginFailed,
  payload: { error }
});
