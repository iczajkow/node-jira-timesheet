import { RootState } from "../../reducer";
import { connect } from "react-redux";
import DashboardPage from "../../pages/DashboardPage";
import * as React from "react";
import { clearUser, logout } from "../../appActions";

const mapStateToProps = (state: RootState) => ({
  user: state.app.user
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
