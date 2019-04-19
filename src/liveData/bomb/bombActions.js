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
  console.log(round, previously, added);
  if (round && round.phase) {
    if (previously && previously.round && previously.round.phase) {
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
  }
  if (added && added.round && added.round.bomb) {
    return dispatch(bombPlanted());
  }
};
