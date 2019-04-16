export const authMiddleware = store => next => action => {
  if (action.type === "AUTHENTICATED_API_REQUEST") {
    const fetchApi = (url, fetchParams) => {
      const state = store.getState();
      const token = state.auth.token;
      const newParams = token
        ? {
            ...fetchParams,
            headers: {
              ...fetchParams.headers,
              Authorization: `Bearer ${token}`
            }
          }
        : fetchParams;
      return fetch(url, newParams);
    };
    return action.request(fetchApi);
  } else {
    return next(action);
  }
};
