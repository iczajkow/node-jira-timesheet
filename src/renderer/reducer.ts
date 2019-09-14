import { combineReducers } from "redux";
import { appReducer, AppState } from "./appReducer";

export interface RootState {
  app: AppState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  app: appReducer
});
