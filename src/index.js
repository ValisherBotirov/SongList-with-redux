import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App.js";
import allReduser from "./reducers/index";

ReactDOM.render(
  <Provider store={createStore(allReduser)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
