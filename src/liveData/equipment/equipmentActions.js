import { EQUIPMENT_UPDATED } from "../../reducers/liveDataReducer";
import { merge, reduce, find, includes } from "lodash";
const quipmentUpdated = equipment => ({ type: EQUIPMENT_UPDATED, equipment });

const findGrenades = equipment =>
  reduce(
    equipment,
    (grenades, elem) => {
      return elem.type === "Grenade"
        ? [...grenades, weaponName(elem)]
        : grenades;
    },
    []
  );
const findMainPrimaryWeapon = equipment =>
  find(equipment, elem =>
    includes(
      ["Shotgun", "Machine Gun", "Submachine Gun", "Rifle", "SniperRifle"],
      elem.type
    )
  );
const weaponName = weapon => weapon && weapon.name.split("_")[1];

const findEquipment = equipment => {
  const grenades = findGrenades(equipment);
  const c4 = weaponName(find(equipment, { type: "C4" }));
  const pistol = weaponName(find(equipment, { type: "Pistol" }));
  const primaryWeapon = weaponName(findMainPrimaryWeapon(equipment));
  return { grenades, c4, pistol, primaryWeapon };
};

export const equipment = ({ player, previously, added }) => dispatch => {
  const _previously = merge({ player: { weapons: null } }, previously);
  const _added = merge({ player: { state: { defusekit: null } } }, added);
  if (_previously.player.weapons || _added.player.state.defusekit) {
    const equipment = findEquipment(player.weapons);
    const defusekit = player.state.defusekit;
    dispatch(quipmentUpdated({ ...equipment, defusekit }));
  }
};
