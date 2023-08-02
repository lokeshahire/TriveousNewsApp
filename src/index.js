import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers"; // Import your combined reducers
import App from "./App";
import "./index.css";

const store = createStore(rootReducer); // Create the Redux store using your combined reducers

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
