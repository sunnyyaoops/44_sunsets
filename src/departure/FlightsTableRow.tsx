import type { SunsetLocation } from "../types";
import SplitFlap, { Presets, type SplitFlapProps } from "react-split-flap";
import { TicketPerforatedFill } from "react-bootstrap-icons";
import { LightColorList } from "../common/COLORS";
import { useLocation } from "wouter";
import { handleClickForBoarding } from "./helpers/handleClickForBoarding";
import { TIME_FORMAT } from "../common/TIME_FORMAT";
import { truncateText } from "./helpers/truncateText";
import { FlightStatus } from "./flightStatus/FlightStatus";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ButtonWithIconAndText } from "../common/ButtonWithIconAndText";
interface IFlightsTableRowProps {
  location: SunsetLocation;
}
const customStyle: Partial<SplitFlapProps> = {
  hinge: false,
  style: {
    fontSize: 28,
  },
};
export const FlightsTableRow: React.FC<IFlightsTableRowProps> = ({
  location,
}) => {
  const [, navigate] = useLocation();
  const { id, name, lng, lat, nameAscii } = location;
  const fightColor = LightColorList[name.length % LightColorList.length];
  const boardingTime = new Date().toLocaleTimeString([], TIME_FORMAT);
  return (
    <tr id={id}>
      <td aria-label={boardingTime}>
        <SplitFlap
          value={boardingTime}
          chars={Presets.NUM}
          length={5}
          {...customStyle}
        />
      </td>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id={`city-name-tooltip-${id}`}>{name}</Tooltip>}
      >
        <td>
          <SplitFlap
            value={truncateText({ text: name, maxLength: 18 })}
            chars={Presets.ALPHANUM}
            length={18}
            fontColor={fightColor}
            {...customStyle}
          />
        </td>
      </OverlayTrigger>
      <td aria-label={lng.toFixed(2)}>
        <SplitFlap
          value={lng.toFixed(2)}
          chars={Presets.NUM}
          length={7}
          {...customStyle}
        />
      </td>
      <td aria-label={lat.toFixed(2)}>
        <SplitFlap
          value={lat.toFixed(2)}
          chars={Presets.NUM}
          length={6}
          {...customStyle}
        />
      </td>
      <td aria-label={`The flight to ${name} is boarding`}>
        <FlightStatus />
      </td>
      <td>
        <ButtonWithIconAndText
          aria-label={`Board the flight to ${name}!`}
          variant="dark"
          style={{
            color: fightColor,
          }}
          onClick={() =>
            handleClickForBoarding({
              id,
              lat,
              lng,
              nameAscii,
              navigate,
            })
          }
          icon={<TicketPerforatedFill width="24" height="24" />}
          text="BOARD"
        />
      </td>
    </tr>
  );
};
