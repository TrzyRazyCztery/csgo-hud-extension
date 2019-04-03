import { LIVEDATA_RECEIVED } from "../reducers/liveDataReducer";

const livedataReceived = liveData => ({ type: LIVEDATA_RECEIVED, liveData });

export const startReceivingData = dispatch => {
  const liveDataSource = new EventSource("http://localhost:3030/events");
  liveDataSource.onmessage = event => {
    const parsedEventData = parseEventData(event.data);
    dispatch(livedataReceived(parsedEventData));
  };
};

const parseEventData = eventData => JSON.parse(JSON.parse(eventData));
