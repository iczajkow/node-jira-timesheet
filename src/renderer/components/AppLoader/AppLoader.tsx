import * as React from "react";
import Spinner from "react-bootstrap/Spinner";
import { ClientConfig } from "../../../jira-client/models/client-config";

import "./AppLoader.scss";

interface Props {
  clientConfig?: ClientConfig;
}

const AppLoader: React.FunctionComponent<Props> = ({ clientConfig }) => {
  return (
    <div className="loader__container">
      <div className="loader__spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
      {clientConfig
        ? `Connecting to ${clientConfig.url} as ${clientConfig.email}`
        : "Loading..."}
    </div>
  );
};

export default AppLoader;
