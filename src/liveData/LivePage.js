import React, { Component } from "react";
import { connect } from "react-redux";
import { getLiveData } from "../reducers/liveDataReducer";
import _ from "lodash";
import { startReceivingData } from "../liveData/liveDataActions";
import Bomb from "./bomb/Bomb";

export class LivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bomb: false
    };
  }
  render() {
    const { map, provider, player, round } = this.props.liveData;
    return (
      <div className="page">
        <ul>
          <li>
            MAP: {map && map.name} round: {map && map.round}{" "}
          </li>
          <li>Player Name: {player && player.name}</li>
          <li>
            Kills: {player && player.match_stats && player.match_stats.kills}
          </li>
          <li>Weapons:</li>
          <ul>
            {_.map(player.weapons, (weapon, index) => (
              <li key={index}>
                {" "}
                {weapon.name} :{" "}
                {weapon.ammo_clip
                  ? weapon.ammo_clip + "/" + weapon.ammo_clip_max
                  : ""}{" "}
              </li>
            ))}
          </ul>
        </ul>
        <button
          onClick={() => {
            this.props.startReceivingData();
          }}
        >
          {" "}
          Establish Connection{" "}
        </button>
        <button onClick={() => this.setState({ bomb: !this.state.bomb })} />
        <Bomb />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  liveData: getLiveData(state)
});

const mapDistpachToProps = dispatch => ({
  startReceivingData: () => dispatch(startReceivingData)
});
export default connect(
  mapStateToProps,
  mapDistpachToProps
)(LivePage);
