import { Reducer } from "redux";
import { AppActions, AppActionTypes } from "./appActions";
import { User } from "../jira-client/models/user";

export interface AppState {
  user: User;
}

const defaultState: AppState = {
  user: null
};

export const appReducer: Reducer<AppState> = (
  state = defaultState,
  action: AppActions
) => {
  switch (action.type) {
    case AppActionTypes.SetUser:
      return { ...state, user: action.payload.user };
    case AppActionTypes.ClearUser:
      return { ...state, user: null };
    default:
      return state;
  }
};
