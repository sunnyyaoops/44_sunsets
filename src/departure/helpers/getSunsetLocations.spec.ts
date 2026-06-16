import { describe, expect, it } from "vitest";
import { getSunsetLocations } from "./getSunsetLocations";
import {
  nullIslandPoint,
  roundedPacificOceanPoint,
  roundedPointLyon,
} from "./testData";
describe("getSunsetLocations", () => {
  it("should return sunset cities when available", () => {
    const result = getSunsetLocations({
      roundedEveningPoints: [roundedPointLyon, nullIslandPoint],
    });
    expect(result).toHaveLength(12);
    expect(result[0].name).toBe("Lyon");
  });

  it("should return ocean location when no sunset cities available", () => {
    const result = getSunsetLocations({
      roundedEveningPoints: [roundedPacificOceanPoint],
    });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Pacific Ocean");
  });
  it("should return empty array, when no sunset cities or ocean locations are found", () => {
    const result = getSunsetLocations({
      roundedEveningPoints: [{ lat: 0, lng: -60 }],
    });
    expect(result).toEqual([]);
  });
});
