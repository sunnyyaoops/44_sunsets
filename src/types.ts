export interface LatLng {
  lat: number;
  lng: number;
}
export interface SunsetLocation extends LatLng {
  id: string;
  nameAscii: string;
  name: string;
}
export interface City extends SunsetLocation {
  roundedLat: number;
  roundedLng: number;
}
export interface GroupedCities {
  [key: string]: City[];
}
