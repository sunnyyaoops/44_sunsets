import { afterEach, describe, expect, it, vi } from "vitest";
import { handleClickForBoarding } from "./handleClickForBoarding";
import { OCEAN_SUNSET_LOCATION_ID } from "./getOceanSunsetLocation";
import { cityLyon, roundedPacificOceanPoint } from "./testData";
import { getOceanArrivalPath } from "../../helpers/getOceanArrivalPath";
import { getCityArrivalPath } from "../../helpers/getCityArrivalPath";
const navigate = vi.fn();
afterEach(() => {
  vi.clearAllMocks();
});
describe("handleClickForBoarding", () => {
  it("should navigate to ocean arrival page", () => {
    handleClickForBoarding({
      id: OCEAN_SUNSET_LOCATION_ID,
      lat: roundedPacificOceanPoint.lat,
      lng: roundedPacificOceanPoint.lng,
      nameAscii: "Pacific Ocean",
      navigate,
    });
    expect(navigate).toHaveBeenCalledWith(
      getOceanArrivalPath({
        nameAscii: "Pacific Ocean",
        lat: roundedPacificOceanPoint.lat,
        lng: roundedPacificOceanPoint.lng,
      }),
    );
  });
  it("should navigate to city arrival page", () => {
    handleClickForBoarding({
      id: cityLyon.id,
      lat: cityLyon.lat,
      lng: cityLyon.lng,
      nameAscii: cityLyon.nameAscii,
      navigate,
    });
    expect(navigate).toHaveBeenCalledWith(
      getCityArrivalPath({
        cityId: cityLyon.id,
      }),
    );
  });
});
