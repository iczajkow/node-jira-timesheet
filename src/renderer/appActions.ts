import { User } from "./models/user";
import { PayloadAction } from "./models/payloadAction";

export enum AppActionTypes {
  SetUser = "APP_SET_USER"
}

export interface SetUserAction extends PayloadAction<User> {
  type: AppActionTypes.SetUser;
  payload: { user: User };
}

export type AppActions = SetUserAction;
