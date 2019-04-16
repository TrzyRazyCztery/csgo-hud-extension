import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startReceivingData } from "./liveData/liveDataActions";
import { authorizeUserwithStoredToken } from "./auth/authActions";

const store = configureStore();
store.dispatch(authorizeUserwithStoredToken);
store.dispatch(startReceivingData);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
