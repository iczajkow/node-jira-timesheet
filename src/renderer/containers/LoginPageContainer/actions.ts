import { PayloadAction } from "../../models/payloadAction";
import { ActionCreator, AnyAction } from "redux";
import { User } from "jira-connector/api/user";

export enum LoginActionType {
  Login = "LOGIN_LOGIN",
  LoginSuccess = "LOGIN_LOGIN_SUCCESS",
  LoginFailed = "LOGIN_LOGIN_FAILED",
  LoadCachedUser = "LOGIN_LOAD_CACHED_USER"
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

export interface LoadCachedUser extends AnyAction {
  type: LoginActionType.LoadCachedUser;
}

export type LoginActions =
  | LoginAction
  | LoginSuccess
  | LoginFailed
  | LoadCachedUser;

export const login: ActionCreator<LoginAction> = () => ({
  type: LoginActionType.Login
});

export const success: ActionCreator<LoginSuccess> = (user: User) => ({
  type: LoginActionType.LoginSuccess,
  payload: { user }
});

export const failed: ActionCreator<LoginFailed> = (error: any) => ({
  type: LoginActionType.LoginFailed,
  payload: { error }
});

export const loadCachedUser: ActionCreator<LoadCachedUser> = () => ({
  type: LoginActionType.LoadCachedUser
});
