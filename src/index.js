import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./store/store"
import { Provider } from "react-redux";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
