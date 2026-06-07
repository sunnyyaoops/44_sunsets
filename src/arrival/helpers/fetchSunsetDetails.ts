import type { LatLng } from "../../types";
import {
  sunsetDetailsResponseSchema,
  type SunsetDetails,
} from "../schemas/sunsetDetailsResponseSchema";

export const fetchSunsetDetails = async ({
  lat,
  lng,
}: LatLng): Promise<SunsetDetails> => {
  const url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`;
  const response = await fetch(url);
  const data = await response.json();
  return sunsetDetailsResponseSchema.parse(data).results;
};
