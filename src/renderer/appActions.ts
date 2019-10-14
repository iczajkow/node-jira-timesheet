import { PayloadAction } from "./models/payloadAction";
import { User } from "jira-connector/api/user";

export enum AppActionTypes {
  SetUser = "APP_SET_USER"
}

export interface SetUserAction extends PayloadAction<User> {
  type: AppActionTypes.SetUser;
  payload: { user: User };
}

export type AppActions = SetUserAction;

export const setUser = (user: User) => ({
  type: AppActionTypes.SetUser,
  payload: { user }
});
