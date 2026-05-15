import { OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import type { SunsetLocation } from "../../types";
import sunFill from "../../assets/sun_fill.png";
interface IArrivalInfoProps {
  sunsetLocation: SunsetLocation;
  arrivalDateTime: Date;
}
export const ArrivalInfo: React.FC<IArrivalInfoProps> = ({
  sunsetLocation,
  arrivalDateTime,
}) => {
  const { lat, lng, name } = sunsetLocation;
  return (
    <Stack>
      <div className="h5 mb-0">Welcome to</div>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="location-name-tooltip">{name}</Tooltip>}
      >
        <div className="h1 fw-bold text-truncate" style={{ maxWidth: 300 }}>
          {name}
        </div>
      </OverlayTrigger>
      <div className="h6 mb-1 text-muted">
        ({lat}, {lng})
      </div>
      <div className="h5 d-flex align-items-end">
        Arrived:{" "}
        {arrivalDateTime.toLocaleString([], {
          dateStyle: "medium",
          timeStyle: "short",
          hour12: false,
        })}
        <img
          src={sunFill}
          alt="sunset"
          width={28}
          height={28}
          className="ms-2"
        />
      </div>
    </Stack>
  );
};
