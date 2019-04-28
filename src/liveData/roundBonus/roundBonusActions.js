import { ROUND_BONUS_UPDATED } from "../../reducers/liveDataReducer";
import { streakBonuses, winMinimumBonus } from "./roundBonusValues";
import { merge } from "lodash";

const roundBonusUpdated = roundBonus => ({
  type: ROUND_BONUS_UPDATED,
  roundBonus
});

const calculateRoundBonusPrediction = losingStreak => ({
  win: winMinimumBonus,
  lose: streakBonuses[losingStreak > 4 ? 4 : losingStreak]
});

export const roundBonus = ({ map, round, previously }) => dispatch => {
  const { team_ct, team_t, round: roundNumber } = map;
  const _previously = merge({ round: { phase: null } }, previously);
  if (
    round.phase === "freezetime" &&
    (_previously.round.phase === "over" ||
      roundNumber === 0 ||
      roundNumber === 16)
  ) {
    dispatch(
      roundBonusUpdated({
        counterTerrorist: calculateRoundBonusPrediction(
          team_ct.consecutive_round_losses
        ),
        terrorist: calculateRoundBonusPrediction(
          team_t.consecutive_round_losses
        )
      })
    );
  }
};
