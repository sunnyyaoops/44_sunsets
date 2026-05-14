import { describe, expect, it } from "vitest";
import { truncateText } from "./truncateText";

describe("truncateText", () => {
  it("should not truncate location name when it's not more than 18 letters", () => {
    const result = truncateText({ text: "Saint-Leu-la-Forêt", maxLength: 18 });
    expect(result).toBe("Saint-Leu-la-Forêt");
  });
  it("should truncate location name when it's more than 18 letters", () => {
    const result = truncateText({ text: "La Vallée de Jacmel", maxLength: 18 });
    expect(result).toBe("La Vallée de Jacm…");
  });
});
