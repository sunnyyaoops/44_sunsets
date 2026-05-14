import { describe, expect, it } from "vitest";
import { convertTo24Hour } from "./convertTo24Hour";

describe("convertTo24Hour", () => {
  it("should return - when input is null", () => {
    expect(convertTo24Hour(null)).toBe("-");
  });
  it("should return - when input is undefined", () => {
    expect(convertTo24Hour(undefined)).toBe("-");
  });
  it("should return time in 24 hour - am", () => {
    expect(convertTo24Hour("1:00 AM")).toBe("01:00");
  });
  it("should return time in 24 hour - pm", () => {
    expect(convertTo24Hour("1:00 PM")).toBe("13:00");
  });
  it("should return Invalid Date", () => {
    expect(convertTo24Hour("invalid")).toBe("Invalid Date");
  });
});
