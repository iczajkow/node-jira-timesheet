import * as React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const routes = (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={LoginPage} />
    </HashRouter>
  </Provider>
);

export default routes;
