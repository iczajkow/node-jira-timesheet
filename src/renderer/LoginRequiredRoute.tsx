import { Route, Redirect } from "react-router";

import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "./reducer";

const LoginRequiredRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default connect((state: RootState) => ({
  loggedIn: Boolean(state.app.user)
}))(LoginRequiredRoute);
