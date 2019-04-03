import { createActionNamespace } from "../utils/actions";

const actionNamespace = createActionNamespace("liveData");

export const LIVEDATA_RECEIVED = actionNamespace("LIVEDATA_RECEIVED");

export const getLiveData = state => state.liveData;

const initialState = {
  provider: {},
  map: {},
  round: {},
  player: {}
};

const liveDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIVEDATA_RECEIVED: {
      const { provider, map, round, player } = action.liveData;
      return {
        provider: provider || state.provider,
        map: map || state.map,
        round: round || state.round,
        player: player || state.player
      };
    }
    default:
      return state;
  }
};

export default liveDataReducer;
