import { combineReducers } from "redux";
import { appReducer, AppState } from "./appReducer";
import loginReducer, {
  LoginState
} from "./containers/LoginPageContainer/reducer";
import dashboardReducer, {
  DashboardState
} from "./containers/DashboardPageContainer/reducer";

export interface RootState {
  app: AppState;
  login: LoginState;
  dashboard: DashboardState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  app: appReducer,
  login: loginReducer,
  dashboard: dashboardReducer
});
