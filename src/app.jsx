//@flow
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./scss/style.scss";

import Routes from "./routes/routes";
import { configure } from "./store/configureStore";

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("app")
);
