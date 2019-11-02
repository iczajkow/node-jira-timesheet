import { Reducer } from "redux";
import { DashboardActions, DashboardActionType } from "./actions";
import { WorklogData } from "../../models/worklog-data";
import { RangeModifier } from "react-day-picker";

export interface DashboardState {
  searchRange: RangeModifier;
  isSearching: boolean;
  worklogData: WorklogData[];
}

const defaultState: DashboardState = {
  searchRange: null,
  isSearching: false,
  worklogData: null
};

const dashboardReducer: Reducer<DashboardState> = (
  state = defaultState,
  action: DashboardActions
) => {
  switch (action.type) {
    case DashboardActionType.Search:
      return { ...state, isSearching: true, searchRange: action.payload.range };
    case DashboardActionType.SearchCompleted:
      return {
        ...state,
        isSearching: false,
        worklogData: action.payload.worklogData
      };
    case DashboardActionType.Clear:
      return {
        ...state,
        worklogData: null
      };
    case DashboardActionType.Cancel:
      return {
        ...state,
        worklogData: null,
        isSearching: false
      };
    default:
      return state;
  }
};

export default dashboardReducer;
