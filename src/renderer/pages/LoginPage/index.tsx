import * as React from "react";
import "./index.scss";
import LoginContainer from "../../containers/LoginContainer";

const LoginPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-9 mx-auto login__content">
        <LoginContainer />
      </div>
    </div>
  </div>
);

export default LoginPage;
