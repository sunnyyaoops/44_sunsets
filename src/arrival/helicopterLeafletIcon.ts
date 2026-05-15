import { Icon } from "leaflet";
import { HELICOPTER_SIZE } from "../common/HELICOPTER_SIZE";
import helicopter from "../assets/helicopter.png";

export const helicopterLeafletIcon = new Icon({
  iconUrl: helicopter,
  iconSize: [HELICOPTER_SIZE, HELICOPTER_SIZE],
});
