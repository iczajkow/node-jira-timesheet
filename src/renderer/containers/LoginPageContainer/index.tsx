import * as React from "react";
import { RootState } from "../../reducer";
import { connect } from "react-redux";
import { loadCachedUser, LoginActions } from "./actions";
import { authenticate } from "./authenticate";
import { ClientConfig } from "../../../jira-client/models/client-config";
import LoginPage from "../../pages/LoginPage";
import { ClientConfigStorage } from "./client-config-storage";
import { valdiateClient } from "./client-validator";

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: Boolean(state.app.user),
  isLoggingIn: state.login.isLoggingIn,
  isLoadingCachedUser: state.login.isLoadingCachedUser,
  error: state.login.error
});

const mapDispatchToProps = (dispatch: React.Dispatch<LoginActions>) => ({
  login: (config: ClientConfig) => dispatch(authenticate(config) as any),
  loadCachedUser: () => {
    const client = ClientConfigStorage.loadClientConfig();
    if (valdiateClient(client)) {
      dispatch(loadCachedUser());
      dispatch(authenticate(client) as any);
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
