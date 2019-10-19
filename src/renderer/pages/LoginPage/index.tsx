import * as React from "react";
import { useEffect } from "react";
import "./index.scss";
import { ClientConfig } from "../../../jira-client/models/client-config";
import Login from "../../components/Login/Login";
import { Redirect } from "react-router";
import { LoginError } from "../../containers/LoginPageContainer/login-error";

export interface Props {
  error?: LoginError;
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

  const [initialized, setInitialized] = React.useState(false);

  useEffect(() => {
    if (!error && !isLoadingCachedUser && !isLoggingIn) {
      loadCachedUser();
      setInitialized(true);
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-9 mx-auto login__content">
          {isLoadingCachedUser || !initialized ? (
            <div>Loading cached user</div>
          ) : (
            <Login login={login} error={error} isLoggingIn={isLoggingIn} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
