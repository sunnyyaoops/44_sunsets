import { describe, expect, it } from "vitest";
import { getCityArrivalPath } from "./getCityArrivalPath";

describe("getCityArrivalPath", () => {
  it("should return city arrival path", () => {
    expect(getCityArrivalPath({ cityId: "1" })).toBe("/arrival/1");
  });
});
