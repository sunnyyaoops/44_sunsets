import { describe, expect, it } from "vitest";
import { getSunsetCities } from "./getSunsetCities";
import {
  cityGroupIncludingLyon,
  roundedPointLyon,
  roundedPacificOceanPoint,
  nullIslandPoint,
} from "./testData";
describe("getSunsetCities", () => {
  it("should return cities when coordinates match", () => {
    const result = getSunsetCities({
      roundedEveningPoints: [roundedPointLyon, nullIslandPoint],
    });
    expect(result).toStrictEqual(cityGroupIncludingLyon);
  });
  it("should return empty array when there's no matching city", () => {
    const result = getSunsetCities({
      roundedEveningPoints: [roundedPacificOceanPoint, nullIslandPoint], // Pacific Ocean
    });
    expect(result).toStrictEqual([]);
  });
});
