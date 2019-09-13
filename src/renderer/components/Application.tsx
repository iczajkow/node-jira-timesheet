import { hot } from "react-hot-loader/root";
import Button from "react-bootstrap/Button";
import * as React from "react";

import CounterContainer from "../containers/CounterContainer";

const Application = () => (
  <div className="col-3">
    <Button variant="primary">Test</Button>
  </div>
);

export default hot(Application);
