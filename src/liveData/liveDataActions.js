import { LIVEDATA_RECEIVED } from "../reducers/liveDataReducer";
import { notifyError } from "../shared/notificationActions";
import { bombStatus } from "./bomb/bombActions";
import { roundBonus } from "./roundBonus/roundBonusActions";
import { moneyBalance } from "./money/moneyActions";
import { roundPhase } from "./roundPhase/roundPhaseActions";
import { equipment } from "./equipment/equipmentActions";

const livedataReceived = liveData => ({ type: LIVEDATA_RECEIVED, liveData });

export const startReceivingData = async dispatch => {
  try {
    const fetchedConnectionToken = await dispatch({
      type: "AUTHENTICATED_API_REQUEST",
      request: fetch => {
        return fetch("http://localhost:3037/livedata/establish", {
          method: "GET"
        });
      }
    });
    const connectionToken = await fetchedConnectionToken.text();
    const liveDataSource = new EventSource(
      `http://localhost:3037/livedata/${connectionToken}`
    );
    liveDataSource.onmessage = event => {
      const parsedEventData = parseEventData(event.data);
      console.log(parsedEventData);
      dispatch(bombStatus(parsedEventData));
      dispatch(roundBonus(parsedEventData));
      dispatch(moneyBalance(parsedEventData));
      dispatch(roundPhase(parsedEventData));
      dispatch(equipment(parsedEventData));
    };
    return true;
  } catch (err) {
    dispatch(notifyError(err));
    throw err;
  }
};

const parseEventData = eventData => JSON.parse(JSON.parse(eventData));
