import { merge } from "lodash";
import {
  BOMB_DEFUSED,
  BOMB_EXPLODED,
  BOMB_PLANTED,
  BOMB_NOT_PLANTED
} from "../../reducers/liveDataReducer";

const bombPlanted = () => ({ type: BOMB_PLANTED });
const bombDefused = () => ({ type: BOMB_DEFUSED });
const bombExploded = () => ({ type: BOMB_EXPLODED });
const bombNotPlanted = () => ({ type: BOMB_NOT_PLANTED });

export const bombStatus = ({ round, previously, added }) => dispatch => {
  const _previously = merge({ round: { phase: null } }, previously);
  const _added = merge({ round: { bomb: null } }, added);

  if (_previously.round.phase) {
    if (round.phase === "freezetime") {
      return dispatch(bombNotPlanted());
    }
    if (round.phase === "over") {
      if (round.bomb === "exploded") {
        return dispatch(bombExploded());
      }
      if (round.bomb === "defused") {
        return dispatch(bombDefused());
      }
    }
  }
  if (_added.round.bomb) {
    return dispatch(bombPlanted());
  }
};
