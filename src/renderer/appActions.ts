import { PayloadAction } from "./models/payloadAction";
import { User } from "../jira-client/models/user";
import { AnyAction } from "redux";
import { ClientConfigStorage } from "./containers/LoginPageContainer/client-config-storage";

export enum AppActionTypes {
  SetUser = "APP_SET_USER",
  ClearUser = "APP_CLEAR_USER"
}

export interface SetUserAction extends PayloadAction<User> {
  type: AppActionTypes.SetUser;
  payload: { user: User };
}

export interface ClearUserAction extends AnyAction {
  type: AppActionTypes.ClearUser;
}

export type AppActions = SetUserAction | ClearUserAction;

export const setUser = (user: User) => ({
  type: AppActionTypes.SetUser,
  payload: { user }
});

export const clearUser = () => ({
  type: AppActionTypes.ClearUser
});

export const logout = () => {
  return (dispatch: any) => {
    ClientConfigStorage.clearUser();
    dispatch(clearUser());
  };
};
