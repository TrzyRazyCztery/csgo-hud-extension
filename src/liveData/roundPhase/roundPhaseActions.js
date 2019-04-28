import { ROUND_PHASE_UPDATED } from "../../reducers/liveDataReducer";
import { merge } from "lodash";
const roundPhaseUpdated = roundPhase => ({
  type: ROUND_PHASE_UPDATED,
  roundPhase
});

export const roundPhase = ({ round, previously }) => dispatch => {
  const _previously = merge({ round: { phase: null } }, previously);
  const {
    round: { phase: prevRoundPhase }
  } = _previously;
  if (prevRoundPhase && prevRoundPhase !== round.phase) {
    dispatch(roundPhaseUpdated(round.phase));
  }
};
