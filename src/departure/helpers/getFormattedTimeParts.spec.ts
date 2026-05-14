import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { getFormattedTimeParts } from "./getFormattedTimeParts";

describe("getFormattedTimeParts() 多語系測試", () => {
  beforeEach(() => {
    vi.stubEnv("TZ", "UTC");
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.useRealTimers();
  });
  const mockDate = new Date("2026-06-29T20:30:45.000Z");
  it("return correct time and separator (:)", () => {
    const result = getFormattedTimeParts({ time: mockDate, locale: "fr-FR" });
    expect(result).toEqual({
      hour: "20",
      minute: "30",
      second: "45",
      literal: ":",
    });
  });
  it("return correct time and separator (.)", () => {
    vi.setSystemTime(mockDate);
    const result = getFormattedTimeParts({ time: mockDate, locale: "fi" });
    expect(result).toEqual({
      hour: "20",
      minute: "30",
      second: "45",
      literal: ".",
    });
  });
});
