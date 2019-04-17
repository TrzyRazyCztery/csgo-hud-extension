export const authMiddleware = store => next => action => {
  if (action.type === "AUTHENTICATED_API_REQUEST") {
    const fetchApi = (url, fetchParams) => {
      const state = store.getState();
      const token = state.auth.token;
      if (token) {
        fetchParams = {
          ...fetchParams,
          headers: {
            ...fetchParams.headers,
            Authorization: `Bearer ${token}`
          }
        };
      }

      return fetch(url, fetchParams);
    };
    return action.request(fetchApi);
  } else {
    return next(action);
  }
};
