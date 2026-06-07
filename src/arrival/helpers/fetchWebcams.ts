import type { LatLng } from "../../types";
import {
  webcamResponseSchema,
  type Webcam,
} from "../schemas/webcamResponseSchema";
const RADIUS = 100;
const API_KEY = import.meta.env.VITE_WINDY_API_KEY;
export const fetchWebcams = async ({ lat, lng }: LatLng): Promise<Webcam[]> => {
  const url = `https://api.windy.com/webcams/api/v3/webcams?limit=3&offset=0&nearby=${lat},${lng},${RADIUS}&include=images`;
  const response = await fetch(url, {
    headers: {
      "x-windy-api-key": API_KEY,
    },
  });
  const data = await response.json();
  return webcamResponseSchema.parse(data).webcams;
};
