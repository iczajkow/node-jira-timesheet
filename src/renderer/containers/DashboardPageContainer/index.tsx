import { RootState } from "../../reducer";
import { connect } from "react-redux";
import DashboardPage from "../../pages/DashboardPage";
import * as React from "react";
import { logout } from "../../appActions";
import { RangeModifier } from "react-day-picker/types/common";
import { searchWorklogs } from "./search-worklogs";

const mapStateToProps = (state: RootState) => ({
  user: state.app.user,
  isSearching: state.dashboard.isSearching,
  worklogData: state.dashboard.worklogData,
  searchRange: state.dashboard.searchRange
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
  logout: () => dispatch(logout()),
  search: (range: RangeModifier) => dispatch(searchWorklogs(range))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
