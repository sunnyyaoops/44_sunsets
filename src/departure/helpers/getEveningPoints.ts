import type { LatLng } from "../../types";
import { roundEveningPoints } from "./roundEveningPoints";
interface IGetEveningPoints {
  allPoints: LatLng[];
  currentDayTime: Date;
}
export const getEveningPoints = ({
  allPoints,
  currentDayTime,
}: IGetEveningPoints): LatLng[] => {
  // Get the UTC time used to calculate the terminator
  const utcHours =
    currentDayTime.getUTCHours() + currentDayTime.getUTCMinutes() / 60;
  const eveningPoints = allPoints.filter((point) => {
    // Calculate the approximate local solar time at this specific longitude
    // Every 15 degrees of longitude represents 1 hour of time difference
    let localHours = utcHours + point.lng / 15;
    // Normalize the local time to a standard 24-hour clock (0 to 24)
    localHours = ((localHours % 24) + 24) % 24;
    // The evening terminator (sunset) always occurs between noon (12) and midnight (24)
    return localHours > 12 && localHours < 24;
  });
  // The lng is already rounded to 0.5 degree increments, so round the lat same way to make it easier to find the city matches
  const roundedEveningPoints = roundEveningPoints({ points: eveningPoints });
  return roundedEveningPoints;
};
