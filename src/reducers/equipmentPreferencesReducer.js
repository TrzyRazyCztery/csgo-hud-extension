import {
  pistols,
  rifles,
  equipment
} from "../equipmentPreferences/equipmentItems";

import { createActionNamespace } from "../utils/actions";

const actionNamespace = createActionNamespace("equipmentPreferences");

export const EQUIPMENT_PREFERENCES_UPDATED = actionNamespace(
  "EQUIPMENT_PREFERENCES_UPDATED"
);

export const getEquipmentPreference = (state, preferenceCategory) =>
  state.equipmentPreferences[preferenceCategory] || [];

const initialState = {
  pistols,
  rifles,
  equipment
};

const equipmentPreferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EQUIPMENT_PREFERENCES_UPDATED: {
      const { pistols, rifles, equipment } = action.updatedPreferences;
      return {
        pistols: pistols || state.pistols,
        rifles: rifles || state.rifles,
        equipment: equipment || state.equipment
      };
    }
    default:
      return state;
  }
};

export default equipmentPreferencesReducer;
