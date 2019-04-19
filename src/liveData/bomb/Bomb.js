import React, { Component } from "react";
import BombCounter from "./BombCounter";
import { getBombState } from "../../reducers/liveDataReducer";
import { connect } from "react-redux";

class Bomb extends Component {
  constructor(props) {
    super(props);
  }

  bombState = () => {
    switch (this.props.bombState) {
      case "PLANTED":
        return <BombCounter />;
      case "EXPLODED":
        return <div>EXPLODED</div>;
      case "DEFUSED":
        return <div>DEFUSED</div>;
      default:
        return <div>NOT PLANTED</div>;
    }
  };

  render() {
    console.log("tuuu", this.props.bombState);
    return <div className="bomb">{this.bombState()}</div>;
  }
}
const mapStateToProps = state => ({
  bombState: getBombState(state)
});

export default connect(mapStateToProps)(Bomb);
