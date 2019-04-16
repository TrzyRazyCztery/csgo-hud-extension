import React, { Component } from "react";
import LivePage from "../liveData/LivePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EquipmentPreferences from "../equipmentPreferences/EquipmentPreferences";
import LoginSuccess from "../auth/LoginSuccess";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Router>
          <Route path="/live" component={LivePage} />
          <Route exact path="/" component={EquipmentPreferences} />
          <Route path="/login_success" component={LoginSuccess} />
        </Router>
      </div>
    );
  }
}

export default Content;
