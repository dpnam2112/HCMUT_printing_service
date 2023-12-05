import { Location } from "./types";

const sortLocations = (locations: Location[]) => {
  return locations.sort((a, b) => {
    if (a.building_name !== b.building_name) {
      return a.building_name < b.building_name ? -1 : 1;
    }
    if (a.floor !== b.floor) {
      return a.floor < b.floor ? -1 : 1;
    }
    return a.room_code < b.room_code ? -1 : 1;
  });
};

export { sortLocations };
