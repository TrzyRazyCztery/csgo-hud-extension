import PreferenceList from "./PreferenceList";
import React from "react";
import { connect } from "react-redux";
import { getEquipmentPreference } from "../reducers/equipmentPreferencesReducer";
import { updatePreference } from "./equipmentPreferencesActions";
import { debounce } from "lodash";

export const SinglePreferenceCategory = ({
  preferenceCategory,
  preferenceList,
  updatePreference
}) => (
  <div className="single-preference-category">
    {preferenceCategory}
    <PreferenceList
      preferenceList={preferenceList}
<<<<<<< HEAD
      updatePreference={debounce(updatePreference(preferenceCategory), 500)}
=======
      updatePreference={debounce(updatePreference(preferenceCategory), 400)}
>>>>>>> e408de446308155f754fd0ef68afb8693158185d
    />
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  preferenceList: getEquipmentPreference(state, ownProps.preferenceCategory)
});

const mapDispatchToProps = dispatch => ({
  updatePreference: preferenceCategory => preferenceList =>
    dispatch(updatePreference(preferenceList, preferenceCategory))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePreferenceCategory);
