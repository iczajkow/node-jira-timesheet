import { Action } from "redux";

export enum AppActionTypes {
  SetUser = "APP_SET_USER"
}

export interface SetUserAction extends Action {
    type: AppActionTypes.SetUser;
}

export type AppActions = SetUserAction;
