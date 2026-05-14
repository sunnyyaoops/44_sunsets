import { describe, expect, it } from "vitest";
import { getOceanSunsetLocation } from "./getOceanSunsetLocation";
import {
  nullIslandPoint,
  roundedIndianOceanPoint,
  roundedPacificOceanPoint,
} from "./testData";
import { OCEAN_SUNSET_LOCATION_ID } from "./getOceanSunsetLocation";
describe("getOceanSunsetLocation", () => {
  it("should return Atlantic Ocean", () => {
    const result = getOceanSunsetLocation({
      eveningTerminatorPoints: [nullIslandPoint],
    });
    expect(result.id).toBe(OCEAN_SUNSET_LOCATION_ID);
    expect(result.name).toBe("Atlantic Ocean");
    expect(result.nameAscii).toBe("Atlantic Ocean");
    expect(result.lat).toBe(nullIslandPoint.lat);
    expect(result.lng).toBe(nullIslandPoint.lng);
  });
  it("should return Indian Ocean", () => {
    const result = getOceanSunsetLocation({
      eveningTerminatorPoints: [roundedIndianOceanPoint],
    });
    expect(result.id).toBe(OCEAN_SUNSET_LOCATION_ID);
    expect(result.name).toBe("Indian Ocean");
    expect(result.nameAscii).toBe("Indian Ocean");
    expect(result.lat).toBe(roundedIndianOceanPoint.lat);
    expect(result.lng).toBe(roundedIndianOceanPoint.lng);
  });
  it("should return Pacific Ocean", () => {
    const result = getOceanSunsetLocation({
      eveningTerminatorPoints: [roundedPacificOceanPoint],
    });
    expect(result.id).toBe(OCEAN_SUNSET_LOCATION_ID);
    expect(result.name).toBe("Pacific Ocean");
    expect(result.nameAscii).toBe("Pacific Ocean");
    expect(result.lat).toBe(roundedPacificOceanPoint.lat);
    expect(result.lng).toBe(roundedPacificOceanPoint.lng);
  });
});
