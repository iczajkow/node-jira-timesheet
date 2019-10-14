import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import { connect } from "react-redux";
import { RootState } from "./reducer";
import LoginRequiredRoute from "./LoginRequiredRoute";

interface Props {
  isLoggedIn?: boolean;
}

const mapToState = (state: RootState) => ({
  isLoggedIn: Boolean(state.app.user)
});

const Routes: React.FunctionComponent<Props> = ({ isLoggedIn }) => (
  <HashRouter>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <LoginRequiredRoute component={Dashboard} />
    </Switch>
  </HashRouter>
);

export default connect(mapToState)(Routes);
