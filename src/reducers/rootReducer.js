import { combineReducers } from "redux";
import liveData from "./liveDataReducer";
import equipmentPreferences from "./equipmentPreferencesReducer";
<<<<<<< HEAD
import auth from "./authReducer";
import notifications from "./notificationReducer";

export default combineReducers({
  liveData,
  equipmentPreferences,
  auth,
  notifications
});
=======

export default combineReducers({ liveData, equipmentPreferences });
>>>>>>> e408de446308155f754fd0ef68afb8693158185d
