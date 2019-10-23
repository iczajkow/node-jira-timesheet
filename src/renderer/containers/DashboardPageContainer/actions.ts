import { PayloadAction } from "../../models/payloadAction";
import { RangeModifier } from "react-day-picker/types/common";
import { WorklogData } from "../../models/worklog-data";

export enum DashboardActionType {
  Search = "DASHBOARD_SEARCH",
  SearchCompleted = "DASHBOARD_SEARCH_COMPLETED"
}

export interface DashboardSearchAction extends PayloadAction<RangeModifier> {
  type: DashboardActionType.Search;
  payload: { range: RangeModifier };
}

export interface DashboardSearchCompleted extends PayloadAction<WorklogData[]> {
  type: DashboardActionType.SearchCompleted;
  payload: { worklogData: WorklogData[] };
}

export type DashboardActions = DashboardSearchAction | DashboardSearchCompleted;

export const dashboardSearch = (range: RangeModifier) => ({
  type: DashboardActionType.Search,
  payload: { range }
});

export const dashboardSearchCompleted = (worklogData: WorklogData[]) => ({
  type: DashboardActionType.SearchCompleted,
  payload: { worklogData }
});
