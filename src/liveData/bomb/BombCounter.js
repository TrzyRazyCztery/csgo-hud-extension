import React, { Component } from "react";
import moment from "moment";

const calculateTimeLeft = endPoint =>
  (endPoint.diff(moment()).valueOf() / 1000).toFixed(1);

class BombCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      startPoint: null,
      intervalID: null,
      endPoint: null
    };
  }

  tick = () => {
    const timeLeft = calculateTimeLeft(this.state.endPoint);
    if (timeLeft > 0) {
      this.setState({ timeLeft });
    } else {
      clearInterval(this.state.intervalID);
      this.setState({ timeLeft: 0 });
    }
  };

  startCounting = () => {
    const intervalID = setInterval(this.tick, 100);
    const startPoint = moment();
    const endPoint = moment().add(10, "seconds");
    const timeLeft = calculateTimeLeft(endPoint);
    this.setState({
      startPoint,
      endPoint,
      intervalID,
      timeLeft
    });
  };
  componentDidMount() {
    this.startCounting();
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  render() {
    return <div>{this.state.timeLeft}</div>;
  }
}

export default BombCounter;
