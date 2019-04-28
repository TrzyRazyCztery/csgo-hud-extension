import { createActionNamespace } from "../utils/actions";

const actionNamespace = createActionNamespace("liveData");

export const LIVEDATA_RECEIVED = actionNamespace("LIVEDATA_RECEIVED");
export const BOMB_PLANTED = actionNamespace("BOMB_PLANTED");
export const BOMB_EXPLODED = actionNamespace("BOMB_EXPLODED");
export const BOMB_DEFUSED = actionNamespace("BOMB_DEFUSED");
export const BOMB_NOT_PLANTED = actionNamespace("BOMB_NOT_PLANTED");
export const ROUND_BONUS_UPDATED = actionNamespace("ROUND_BONUS_UPDATED");
export const MONEY_BALANCE_UPDATED = actionNamespace("MONEY_BALANCE_UPDATED");
export const ROUND_PHASE_UPDATED = actionNamespace("ROUND_PHASE_UPDATED");

export const getRoundPhase = state => state.liveData.roundState.phase;
export const getLiveData = state => state.liveData;
export const getBombState = state => state.liveData.roundState.bomb;

const initialState = {
  roundState: {
    phase: null,
    bomb: null
  },
  roundBonus: {
    counterTerrorist: {
      win: null,
      lose: null
    },
    terrorist: {
      win: null,
      lose: null
    }
  },
  moneyBalance: null,
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
        ...state,
        provider: provider || state.provider,
        map: map || state.map,
        round: round || state.round,
        player: player || state.player
      };
    }
    case BOMB_PLANTED: {
      return { ...state, roundState: { ...state.roundState, bomb: "PLANTED" } };
    }
    case BOMB_EXPLODED: {
      return {
        ...state,
        roundState: { ...state.roundState, bomb: "EXPLODED" }
      };
    }
    case BOMB_DEFUSED: {
      return { ...state, roundState: { ...state.roundState, bomb: "DEFUSED" } };
    }
    case BOMB_NOT_PLANTED: {
      return {
        ...state,
        roundState: { ...state.roundState, bomb: "NOT_PLANTED" }
      };
    }
    case ROUND_BONUS_UPDATED: {
      return {
        ...state,
        roundBonus: action.roundBonus || state.roundBonus
      };
    }
    case MONEY_BALANCE_UPDATED: {
      return {
        ...state,
        moneyBalance: action.moneyBalance || state.moneyBalance
      };
    }
    case ROUND_PHASE_UPDATED: {
      return {
        ...state,
        roundState: { ...state.roundState, phase: action.roundPhase }
      };
    }
    default:
      return state;
  }
};

export default liveDataReducer;
