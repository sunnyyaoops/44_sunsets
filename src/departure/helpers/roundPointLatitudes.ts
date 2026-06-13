import type { LatLng } from "../../types";
interface IRoundPointLatitudesProps {
  points: LatLng[];
}

export const roundPointLatitudes = ({ points }: IRoundPointLatitudesProps) =>
  points.map((point) => ({
    lat: Math.round(point.lat * 2) / 2,
    lng: point.lng,
  }));
