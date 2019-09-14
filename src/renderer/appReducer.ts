import { User } from "./models/user";
import { Reducer } from "redux";
import { AppActions, AppActionTypes } from "./appActions";

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
    default:
      return state;
  }
};
