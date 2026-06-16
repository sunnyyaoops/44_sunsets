import type { SunsetLocation, LatLng } from "../../types";
interface IGetOceanSunsetLocationProps {
  eveningTerminatorPoints: LatLng[];
}
export const OCEAN_SUNSET_LOCATION_ID = "ocean";
export const getOceanSunsetLocation = ({
  eveningTerminatorPoints,
}: IGetOceanSunsetLocationProps): SunsetLocation | null => {
  // Find the point closest to the equator
  const pointNearEquator = eveningTerminatorPoints.reduce((closest, current) =>
    Math.abs(current.lat) < Math.abs(closest.lat) ? current : closest,
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
    return null;
  }
  return {
    id: OCEAN_SUNSET_LOCATION_ID,
    name: oceanName,
    nameAscii: oceanName,
    lat: pointNearEquator?.lat || 0,
    lng: pointNearEquator?.lng || 0,
  };
};
