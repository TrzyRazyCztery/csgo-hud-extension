import { LIVEDATA_RECEIVED } from "../reducers/liveDataReducer";

const livedataReceived = liveData => ({ type: LIVEDATA_RECEIVED, liveData });

export const startReceivingData = async dispatch => {
  try {
    const fetchedConnectionToken = await dispatch({
      type: "AUTHENTICATED_API_REQUEST",
      request: fetch => {
        return fetch("http://localhost:3037/livedata/", { method: "GET" });
      }
    });
    const connectionToken = await fetchedConnectionToken.text();
    const liveDataSource = new EventSource(
      `http://localhost:3037/livedata/${connectionToken}`
    );
    liveDataSource.onmessage = event => {
      const parsedEventData = parseEventData(event.data);
      dispatch(livedataReceived(parsedEventData));
    };
  } catch {}
};

const parseEventData = eventData => JSON.parse(eventData);
