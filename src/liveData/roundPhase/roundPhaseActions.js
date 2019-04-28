import { ROUND_PHASE_UPDATED } from "../../reducers/liveDataReducer";

const roundPhaseUpdated = roundPhase => ({
  type: ROUND_PHASE_UPDATED,
  roundPhase
});

export const roundPhase = ({ round, previously }) => dispatch => {
  if (previously && previously.round && previously.round.phase) {
    if (previously.round.phase !== round.phase) {
      dispatch(roundPhaseUpdated(round.phase));
    }
  }
};
