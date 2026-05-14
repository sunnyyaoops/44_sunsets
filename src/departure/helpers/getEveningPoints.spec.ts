import { describe, expect, it } from "vitest";
import { getEveningPoints } from "./getEveningPoints";
import { roundedPointAntipodeOfLyon, roundedPointLyon } from "./testData";

// When sunset or sunrise is happening in Lyon, the terminator should be passing both Lyon and its antipode
// which means one of them should be sunset and the other one should be sunrise
const sunsetTimeLyon = new Date(Date.UTC(1900, 5, 29, 18, 0, 0));
const sunriseTimeLyon = new Date(Date.UTC(1900, 5, 29, 2, 0, 0));
describe("getEveningPoints", () => {
  it("should return Lyon when it's sunset in Lyon", () => {
    const result = getEveningPoints({
      allPoints: [roundedPointAntipodeOfLyon, roundedPointLyon],
      currentDayTime: sunsetTimeLyon,
    });
    expect(result).toStrictEqual([roundedPointLyon]);
  });
  it("should return antipode of Lyon when it's sunrise in Lyon", () => {
    const result = getEveningPoints({
      allPoints: [roundedPointAntipodeOfLyon, roundedPointLyon],
      currentDayTime: sunriseTimeLyon,
    });
    expect(result).toStrictEqual([roundedPointAntipodeOfLyon]);
  });
});
