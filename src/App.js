import React, { Component } from "react";
<<<<<<< HEAD
import Page from "./layout/Page";
=======
import LivePage from "./liveData/LivePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EquipmentPreferences from "./equipmentPreferences/EquipmentPreferences";
>>>>>>> e408de446308155f754fd0ef68afb8693158185d

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Page />
=======
        <Router>
          <Route path="/live" component={LivePage} />
          <Route path="/cats" component={EquipmentPreferences} />
        </Router>
>>>>>>> e408de446308155f754fd0ef68afb8693158185d
      </div>
    );
  }
}

export default App;
