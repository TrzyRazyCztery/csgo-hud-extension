import React, { Component } from "react";
import LivePage from "./liveData/LivePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EquipmentPreferences from "./equipmentPreferences/EquipmentPreferences";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/live" component={LivePage} />
          <Route path="/cats" component={EquipmentPreferences} />
        </Router>
      </div>
    );
  }
}

export default App;
