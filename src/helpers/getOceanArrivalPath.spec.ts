import { describe, expect, it } from "vitest";
import { getOceanArrivalPath } from "./getOceanArrivalPath";

describe("getOceanArrivalPath", () => {
  it("should return Ocean arrival path", () => {
    expect(
      getOceanArrivalPath({ nameAscii: "Indian Ocean", lat: 0, lng: 60 }),
    ).toBe("/arrival/ocean/Indian Ocean/0/60");
  });
});
