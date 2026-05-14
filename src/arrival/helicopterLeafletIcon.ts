import { Icon } from "leaflet";
import { HELICOPTER_SIZE } from "../common/HELICOPTER_SIZE";

export const helicopterLeafletIcon = new Icon({
  iconUrl: "/helicopter.png",
  iconSize: [HELICOPTER_SIZE, HELICOPTER_SIZE],
});
