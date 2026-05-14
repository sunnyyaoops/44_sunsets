import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { getLocalTimeByUtcOffset } from "./getLocalTimeByUtcOffset";
beforeEach(() => {
  vi.stubEnv("TZ", "UTC");
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 5, 29, 18, 0, 0));
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.useRealTimers();
});
describe("getLocalTimeByUtcOffset", () => {
  it("should return the correct local time (UTC+2)", () => {
    const result = getLocalTimeByUtcOffset({
      timezoneOffsetMinutes: 120,
    });
    // 18:00 UTC + 2 hours = 20:00 UTC
    expect(result).toStrictEqual(new Date("2026-06-29T20:00:00.000Z"));
  });
  it("should return the correct local time (UTC-2)", () => {
    const result = getLocalTimeByUtcOffset({
      timezoneOffsetMinutes: -120,
    });
    // 18:00 UTC - 2 hours = 16:00 UTC
    expect(result).toStrictEqual(new Date("2026-06-29T16:00:00.000Z"));
  });
});
