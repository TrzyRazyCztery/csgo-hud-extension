import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const configureStore = () =>
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer, applyMiddleware(thunk))
    : createStore(rootReducer, applyMiddleware(thunk, logger));

export default configureStore;
