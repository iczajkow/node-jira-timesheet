import { Reducer } from "redux";
import { DashboardActions, DashboardActionType } from "./actions";

export interface DashboardState {
  isSearching: boolean;
}

const defaultState: DashboardState = {
  isSearching: false
};

const dashboardReducer: Reducer<DashboardState> = (
  state = defaultState,
  action: DashboardActions
) => {
  switch (action.type) {
    case DashboardActionType.Search:
      return { ...state, isSearching: true };
    default:
      return state;
  }
};

export default dashboardReducer;
