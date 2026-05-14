import type { SunsetLocation } from "../../types";
import { getOceanSunsetLocation } from "./getOceanSunsetLocation";
import { getSunsetCities } from "./getSunsetCities";
import type { IGetSunsetCities } from "./getSunsetCities";

export const getSunsetLocations = ({
  roundedEveningPoints,
}: IGetSunsetCities): SunsetLocation[] => {
  const sunsetCities = getSunsetCities({ roundedEveningPoints });
  if (sunsetCities.length > 0) {
    return sunsetCities;
  } else {
    const oceanSunsetLocation = getOceanSunsetLocation({
      eveningTerminatorPoints: roundedEveningPoints,
    });
    return [oceanSunsetLocation];
  }
};
