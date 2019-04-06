import React, { Component } from "react";
import SinglePreferenceCategory from "./SinglePreferenceCategory";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class EquipmentPreferences extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <SinglePreferenceCategory preferenceCategory="rifles" key="rifles" />,
        <SinglePreferenceCategory preferenceCategory="pistols" key="pistols" />,
        <SinglePreferenceCategory
          preferenceCategory="equipment"
          key="equipment"
        />
      </DragDropContextProvider>
    );
  }
}

export default EquipmentPreferences;
