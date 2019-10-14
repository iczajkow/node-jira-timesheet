import * as React from "react";
import Login from "../../components/Login/Login";
import { RootState } from "../../reducer";
import { connect } from "react-redux";
import { LoginActions } from "./actions";
import { authenticate } from "./authenticate";
import { ClientConfig } from "../../../jira-client/models/client-config";

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: Boolean(state.app.user),
  isLoggingIn: state.login.isLoggingIn,
  error: state.login.error
});

const mapDispatchToProps = (dispatch: React.Dispatch<LoginActions>) => ({
  login: (config: ClientConfig) => dispatch(authenticate(config) as any)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
