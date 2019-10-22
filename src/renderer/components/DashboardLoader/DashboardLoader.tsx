import * as React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./DashboardLoader.scss";

const DashboardLoader: React.FunctionComponent = () => (
  <div className="dashboard__loading">
    <Spinner
      className="dashboard__spinner"
      animation="border"
      role="status"
      variant="primary"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
    <h4 className="ml-3">Loading...</h4>
  </div>
);

export default DashboardLoader;
