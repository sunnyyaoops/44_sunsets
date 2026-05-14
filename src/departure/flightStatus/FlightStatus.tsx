import { LongFlap } from "react-split-flap";
import { FLIGHT_STATUS_CONFIG } from "./FLIGHT_STATUS_CONFIG";
import { flightStatusFlaps } from "./flightStatusFlaps";

export const FlightStatus: React.FC = () => (
  <LongFlap
    flaps={flightStatusFlaps}
    displayId={FLIGHT_STATUS_CONFIG.BOARDING.id}
    digitWidth={98}
    digitHeight={28}
    timing={100}
    size="small"
    hinge={false}
  />
);
