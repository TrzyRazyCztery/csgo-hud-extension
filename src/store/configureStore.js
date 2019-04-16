import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { authMiddleware } from "../auth/authMiddleware";

const configureStore = () =>
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer, applyMiddleware(thunk, authMiddleware))
    : createStore(rootReducer, applyMiddleware(thunk, logger, authMiddleware));

export default configureStore;
