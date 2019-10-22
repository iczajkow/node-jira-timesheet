import { RootState } from "../../reducer";
import { connect } from "react-redux";
import DashboardPage from "../../pages/DashboardPage";
import * as React from "react";
import { logout } from "../../appActions";
import { RangeModifier } from "react-day-picker/types/common";
import { dashboardSearch } from "./actions";

const mapStateToProps = (state: RootState) => ({
  user: state.app.user,
  isSearching: state.dashboard.isSearching
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
  logout: () => dispatch(logout()),
  search: (range: RangeModifier) => dispatch(dashboardSearch(range))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
