import jwt from "jsonwebtoken";
import { key } from "./.key";
import {
  LOGIN_SUCCESS,
  REMOVED_AUTHORIOZATION_DATA
} from "../reducers/authReducer";
import { storageAdapter } from "../utils/storageAdapter";

const loginSuccess = (token, user) => ({ type: LOGIN_SUCCESS, token, user });
const removedAuthorizationData = () => ({ type: REMOVED_AUTHORIOZATION_DATA });

export const fetchUserData = token => dispatch => {
  console.log("ddd");
  try {
    jwt.verify(token, key);
  } catch (err) {
    console.log("errr", err);
    return;
  }
  fetch("http://localhost:3037/auth/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    console.log(response);
    if (response.ok) {
      response.json().then(data => {
        dispatch(loginSuccess(token, data));
      });
      if (storageAdapter.hasStorage) {
        storageAdapter.store("token", token);
      }
    }
  });
};

export const authorizeUserwithStoredToken = dispatch => {
  if (storageAdapter.hasStorage) {
    const token = storageAdapter.load("token");
    token && dispatch(fetchUserData(token));
  }
};

export const logOut = dispatch => {
  dispatch(removedAuthorizationData());
};
