import { combineReducers } from "redux";
import liveData from "./liveDataReducer";
import equipmentPreferences from "./equipmentPreferencesReducer";

export default combineReducers({ liveData, equipmentPreferences });
