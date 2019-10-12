import { PayloadAction } from "../../models/payloadAction";
import { User } from "../../models/user";
import { ActionCreator } from "redux";

export enum LoginActionType {
  Login = "LOGIN_LOGIN",
  LoginSuccess = "LOGIN_LOGIN_SUCCESS",
  LoginFailed = "LOGIN_LOGIN_FAILED"
}

export interface LoginAction extends PayloadAction<User> {
  type: LoginActionType.Login;
  payload: { user: User };
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

export const login: ActionCreator<LoginAction> = (user: User) => ({
  type: LoginActionType.Login,
  payload: { user }
});
