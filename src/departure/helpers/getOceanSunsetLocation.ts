import type { SunsetLocation, LatLng } from "../../types";
interface IGetOceanSunsetLocationProps {
  eveningTerminatorPoints: LatLng[];
}
export const OCEAN_SUNSET_LOCATION_ID = "ocean";
export const getOceanSunsetLocation = ({
  eveningTerminatorPoints,
}: IGetOceanSunsetLocationProps): SunsetLocation => {
  // Find the point closest to the equator
  const pointNearEquator = eveningTerminatorPoints.find(
    (point) =>
      Math.abs(point.lat) ===
      Math.min(...eveningTerminatorPoints.map((p) => Math.abs(p.lat))),
  );
  const checkOcean = (longitude: number) => {
    if (longitude >= -45 && longitude <= 9) {
      return "Atlantic Ocean";
    } else if (longitude >= 43 && longitude <= 98) {
      return "Indian Ocean";
    } else if (longitude >= 105 || longitude <= -80) {
      return "Pacific Ocean";
    } else {
      return undefined;
    }
  };
  const oceanName = checkOcean(pointNearEquator?.lng || 0);
  if (!oceanName) {
    throw new Error("No ocean found");
  }
  return {
    id: OCEAN_SUNSET_LOCATION_ID,
    name: oceanName,
    nameAscii: oceanName,
    lat: pointNearEquator?.lat || 0,
    lng: pointNearEquator?.lng || 0,
  };
};
