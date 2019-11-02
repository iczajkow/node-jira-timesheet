import { PayloadAction } from "../../models/payloadAction";
import { RangeModifier } from "react-day-picker/types/common";
import { WorklogData } from "../../models/worklog-data";
import { AnyAction } from "redux";

export enum DashboardActionType {
  Search = "DASHBOARD_SEARCH",
  SearchCompleted = "DASHBOARD_SEARCH_COMPLETED",
  Clear = "DASHBOARD_CLEAR",
  Cancel = "DASHBOARD_CANCEL"
}

export interface DashboardSearchAction extends PayloadAction<RangeModifier> {
  type: DashboardActionType.Search;
  payload: { range: RangeModifier };
}

export interface DashboardSearchCompleted extends PayloadAction<WorklogData[]> {
  type: DashboardActionType.SearchCompleted;
  payload: { worklogData: WorklogData[] };
}

export interface DashboardClearAction extends AnyAction {
  type: DashboardActionType.Clear;
}

export interface DashboardCancelAction extends AnyAction {
  type: DashboardActionType.Cancel;
}

export type DashboardActions =
  | DashboardSearchAction
  | DashboardSearchCompleted
  | DashboardClearAction
  | DashboardCancelAction;

export const dashboardSearch = (range: RangeModifier) => ({
  type: DashboardActionType.Search,
  payload: { range }
});

export const dashboardSearchCompleted = (worklogData: WorklogData[]) => ({
  type: DashboardActionType.SearchCompleted,
  payload: { worklogData }
});

export const dashboardClear = () => ({
  type: DashboardActionType.Clear
});

export const dashboardCancel = () => ({
  type: DashboardActionType.Cancel
});
