import { createActionNamespace } from "../utils/actions";

const actionNamespace = createActionNamespace("auth");

export const LOGIN_SUCCESS = actionNamespace("LOGIN_SUCCESS");
export const REMOVED_AUTHORIOZATION_DATA = actionNamespace(
  "REMOVED_AUTHORIOZATION_DATA"
);

export const getAuthenticatedUser = state => state.auth.user;

const initialState = {
  user: null,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { token: action.token, user: action.user };
    case REMOVED_AUTHORIOZATION_DATA:
      return { ...initialState };
    default:
      return state;
  }
};

export default authReducer;
