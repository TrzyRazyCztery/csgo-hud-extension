import { MONEY_BALANCE_UPDATED } from "../../reducers/liveDataReducer";

const moneyBalanceUpdated = moneyBalance => ({
  type: MONEY_BALANCE_UPDATED,
  moneyBalance
});

export const moneyBalance = ({ player, previously }) => dispatch => {
  if (
    player &&
    previously &&
    previously.player &&
    previously.player.state &&
    previously.player.state.money
  ) {
    dispatch(moneyBalanceUpdated(player.state.money));
  }
};
