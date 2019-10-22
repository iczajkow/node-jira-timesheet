import { PayloadAction } from "../../models/payloadAction";
import { RangeModifier } from "react-day-picker/types/common";

export enum DashboardActionType {
  Search = "DASHBOARD_SEARCH"
}

export interface DashboardSearchAction extends PayloadAction<RangeModifier> {
  type: DashboardActionType.Search;
  payload: { range: RangeModifier };
}

export type DashboardActions = DashboardSearchAction;

export const dashboardSearch = (range: RangeModifier) => ({
  type: DashboardActionType.Search,
  payload: { range }
});
