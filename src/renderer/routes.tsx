import * as React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "./reducer";
import LoginRequiredRoute from "./LoginRequiredRoute";
import LoginPageContainer from "./containers/LoginPageContainer";
import DashboardPageContainer from "./containers/DashboardPageContainer";

interface Props {
  isLoggedIn?: boolean;
}

const mapToState = (state: RootState) => ({
  isLoggedIn: Boolean(state.app.user)
});

const Routes: React.FunctionComponent<Props> = ({ isLoggedIn }) => (
  <HashRouter>
    <Switch>
      <Route path="/login" component={LoginPageContainer} />
      <LoginRequiredRoute component={DashboardPageContainer} />
    </Switch>
  </HashRouter>
);

export default connect(mapToState)(Routes);
