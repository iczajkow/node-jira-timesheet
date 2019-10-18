import * as React from "react";
import { useEffect } from "react";
import "./index.scss";
import { ClientConfig } from "../../../jira-client/models/client-config";
import Login from "../../components/Login/Login";
import { Redirect } from "react-router";

export interface Props {
  error?: any;
  isLoggedIn?: boolean;
  isLoggingIn?: boolean;
  isLoadingCachedUser?: boolean;
  login: (config: ClientConfig) => void;
  loadCachedUser: () => void;
}

const LoginPage: React.FunctionComponent<Props> = ({
  error,
  isLoggedIn,
  isLoggingIn,
  isLoadingCachedUser,
  login,
  loadCachedUser
}) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  useEffect(() => loadCachedUser());

  return (
    <div className="container">
      <div className="row">
        <div className="col-9 mx-auto login__content">
          <Login login={login} error={error} isLoggingIn={isLoggingIn} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
