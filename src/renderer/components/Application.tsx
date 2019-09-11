import { hot } from "react-hot-loader/root";
import Button from "react-bootstrap/Button";
import * as React from "react";

import CounterContainer from "../containers/CounterContainer";

const Application = () => (
  <div className="test col-3">
    <Button variant="primary" />
  </div>
);

export default hot(Application);
