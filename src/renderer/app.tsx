import * as React from "react";

import "./styles/index.scss";
import { render } from "react-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

// Create main element
const mainElement = document.createElement("div");
mainElement.classList.add("main");
document.body.appendChild(mainElement);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  mainElement
);
