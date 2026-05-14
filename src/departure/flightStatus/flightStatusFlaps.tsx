import type { LongFlapProps } from "react-split-flap";
import { FlightStatusFlap } from "./FlightStatusFlap";
import { FLIGHT_STATUS_CONFIG } from "./FLIGHT_STATUS_CONFIG";
export const flightStatusFlaps: LongFlapProps["flaps"] = Object.entries(
  FLIGHT_STATUS_CONFIG,
).map(([key, config]) => ({
  id: key,
  component: <FlightStatusFlap status={config.label} color={config.color} />,
}));