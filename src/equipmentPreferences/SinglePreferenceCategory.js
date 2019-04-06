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
      updatePreference={debounce(updatePreference(preferenceCategory), 400)}
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
