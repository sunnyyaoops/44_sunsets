import { groupedCities } from "../../data/groupedCities";
import type { LatLng, City } from "../../types";
export interface IGetSunsetCities {
  roundedEveningPoints: LatLng[];
}
export const getSunsetCities = ({
  roundedEveningPoints,
}: IGetSunsetCities): City[] => {
  const groupedCitiesMap = new Map(Object.entries(groupedCities));
  const sunsetCities: City[] = [];
  roundedEveningPoints.forEach((point) => {
    // Find the city group that matches this point
    const cities = groupedCitiesMap.get(`${point.lat}, ${point.lng}`);
    if (!!cities?.length && cities?.length > 0) {
      sunsetCities.push(...cities);
    }
  });
  return sunsetCities;
};
