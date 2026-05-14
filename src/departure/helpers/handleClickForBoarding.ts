import { getCityArrivalPath } from "../../helpers/getCityArrivalPath";
import { OCEAN_SUNSET_LOCATION_ID } from "./getOceanSunsetLocation";
import type { MouseEventHandler } from "react";
import { getOceanArrivalPath } from "../../helpers/getOceanArrivalPath";
interface IUseHandleClickForBoarding {
  id: string;
  lat: number;
  lng: number;
  nameAscii: string;
  navigate: (url: string) => void;
}
export const handleClickForBoarding = ({
  id,
  lat,
  lng,
  nameAscii,
  navigate,
}: IUseHandleClickForBoarding):
  | MouseEventHandler<HTMLButtonElement>
  | undefined => {
  if (id === OCEAN_SUNSET_LOCATION_ID) {
    navigate(getOceanArrivalPath({ nameAscii, lat, lng }));
    return;
  } else {
    navigate(
      getCityArrivalPath({
        cityId: id,
      }),
    );
  }
  return undefined;
};
