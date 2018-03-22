import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

import Home from "./Home";
import BreadCrumbs from "./BreadCrumbs";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div style={styles}>
        <h2>BreadCrumbs example</h2>
        <BreadCrumbs />
        <Home />
      </div>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById("root"));
