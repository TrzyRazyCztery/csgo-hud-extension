import { merge } from "lodash";
import { MONEY_BALANCE_UPDATED } from "../../reducers/liveDataReducer";

const moneyBalanceUpdated = moneyBalance => ({
  type: MONEY_BALANCE_UPDATED,
  moneyBalance
});

export const moneyBalance = ({ player, previously }) => dispatch => {
  const _previously = merge({ player: { state: { money: null } } }, previously);

  if (_previously.player.state.money) {
    dispatch(moneyBalanceUpdated(player.state.money));
  }
};
