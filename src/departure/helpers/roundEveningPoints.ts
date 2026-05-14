import type { LatLng } from "../../types";
interface IRoundEveningPoints {
  points: LatLng[];
}

export const roundEveningPoints = ({ points }: IRoundEveningPoints) =>
  points.map((point) => ({
    lat: Math.round(point.lat * 2) / 2,
    lng: point.lng,
  }));
