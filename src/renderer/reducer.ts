import { combineReducers } from "redux";
import { appReducer, AppState } from "./appReducer";
import reducer, { LoginState } from "./containers/LoginContainer/reducer";

export interface RootState {
  app: AppState;
  login: LoginState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  app: appReducer,
  login: loginReducer
});
