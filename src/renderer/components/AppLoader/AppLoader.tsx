import * as React from "react";
import Spinner from "react-bootstrap/Spinner";

interface Props {}

const AppLoader: React.FunctionComponent<Props> = ({}) => {
  return (
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      Loading...
    </div>
  );
};

export default AppLoader;
