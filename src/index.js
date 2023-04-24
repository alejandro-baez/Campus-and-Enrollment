import { createRoot } from "react-dom/client";
import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
);
