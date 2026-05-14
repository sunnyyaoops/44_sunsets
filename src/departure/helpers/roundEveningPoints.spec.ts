import { it, expect, describe } from "vitest";
import { roundEveningPoints } from "./roundEveningPoints";
describe("roundEveningPoints", () => {
  it("should round points to nearest 0.5", () => {
    const points = [
      { lat: 45.713, lng: 4.5 },
      { lat: -48.972, lng: 2.5 },
    ];
    const result = roundEveningPoints({ points });
    expect(result).toStrictEqual([
      { lat: 45.5, lng: 4.5 },
      { lat: -49, lng: 2.5 },
    ]);
  });
});
