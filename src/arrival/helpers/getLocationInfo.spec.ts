import { describe, expect, it } from "vitest";
import { getLocationInfo } from "./getLocationInfo";
import type { City, SunsetLocation } from "../../types";
import { fallbackCity } from "./fallbackCity";
const sunsetOcean: SunsetLocation = {
  lat: 37.7749,
  lng: -122.4194,
  id: "it",
  nameAscii: "Test",
  name: "Test",
};
const cityLyon: City = {
  lat: 45.76,
  lng: 4.84,
  id: "1250196189",
  nameAscii: "Lyon",
  name: "Lyon",
  roundedLat: 46,
  roundedLng: 5,
};
describe("getLocationInfo", () => {
  it("should return sunset ocean", () => {
    const result = getLocationInfo({
      cityId: null,
      sunsetOcean,
    });
    expect(result).toStrictEqual(sunsetOcean);
  });
  it("should return sunset city", () => {
    const result = getLocationInfo({
      cityId: cityLyon.id,
      sunsetOcean: null,
    });
    expect(result).toStrictEqual(cityLyon);
  });
  it("should return fallback city when cityId doesn't exist", () => {
    const result = getLocationInfo({
      cityId: "nonexistent",
      sunsetOcean: null,
    });
    expect(result).toStrictEqual(fallbackCity);
  });
  it("should return fallback city when cityId and sunsetOcean are both null", () => {
    const result = getLocationInfo({
      cityId: null,
      sunsetOcean: null,
    });
    expect(result).toStrictEqual(fallbackCity);
  });
});
