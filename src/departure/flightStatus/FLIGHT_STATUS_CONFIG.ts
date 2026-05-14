import { COLORS } from "../../common/COLORS";

export const FLIGHT_STATUS_CONFIG = {
  CANCLLED: { id: "CANCLLED", color: COLORS.RED, label: "CANCLLED" },
  ON_TIME: { id: "ON_TIME", color: COLORS.GREEN, label: "ON TIME" },
  LAST_CALL: { id: "LAST_CALL", color: COLORS.YELLOW, label: "LAST CALL" },
  BOARDING: { id: "BOARDING", color: COLORS.BLUE, label: "BOARDING" },
} as const;
