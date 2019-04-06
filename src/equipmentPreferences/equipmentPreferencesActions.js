import { EQUIPMENT_PREFERENCES_UPDATED } from "../reducers/equipmentPreferencesReducer";

const equipmentPreferencesUpdated = updatedPreferences => ({
  type: EQUIPMENT_PREFERENCES_UPDATED,
  updatedPreferences
});

export const updatePreference = (
  preferenceList,
  preferenceCategory
) => dispatch => {
  dispatch(
    equipmentPreferencesUpdated({ [preferenceCategory]: preferenceList })
  );
};
