import { cities } from "../../data/cities";
import type { City, SunsetLocation } from "../../types";
import { fallbackCity } from "./fallbackCity";

export interface IGetLocationInfo {
  cityId: string | null;
  sunsetOcean: SunsetLocation | null;
}
export const getLocationInfo = ({
  cityId,
  sunsetOcean,
}: IGetLocationInfo): SunsetLocation => {
  if (sunsetOcean) {
    return sunsetOcean;
  } else if (cityId) {
    const city: City =
      cities.find((city) => city.id === cityId) || fallbackCity;
    return city;
  }
  return fallbackCity;
};
