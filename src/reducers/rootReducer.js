import { combineReducers } from "redux";
import liveData from "./liveDataReducer";
import equipmentPreferences from "./equipmentPreferencesReducer";
import auth from "./authReducer";
import notifications from "./notificationReducer";

export default combineReducers({
  liveData,
  equipmentPreferences,
  auth,
  notifications
});
