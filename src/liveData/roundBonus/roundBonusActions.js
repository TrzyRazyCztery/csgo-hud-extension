import { ROUND_BONUS_UPDATED } from "../../reducers/liveDataReducer";
import { streakBonuses, winMinimumBonus } from "./roundBonusValues";

const roundBonusUpdated = roundBonus => ({
  type: ROUND_BONUS_UPDATED,
  roundBonus
});

const calculateRoundBonusPrediction = losingStreak => ({
  win: winMinimumBonus,
  lose: streakBonuses[losingStreak + 1 > 5 ? 5 : losingStreak + 1]
});

export const roundBonus = ({ map, round, previously }) => dispatch => {
  const { team_ct, team_t, round: roundNumber } = map;
  if (
    round.phase === "freezetime" &&
    ((previously && previously.round && previously.round.phase === "over") ||
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
