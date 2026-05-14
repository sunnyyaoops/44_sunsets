import { Col, Container, Row } from "react-bootstrap";
import type { SunsetLocation } from "../../types";
import { getLocalTimeByUtcOffset } from "../helpers/getLocalTimeByUtcOffset";
import { SunsetDetailsTable, type ISunsetDetails } from "./SunsetDetailsTable";
import { Google, HouseDoorFill } from "react-bootstrap-icons";
import { useLocation } from "wouter";
import { ButtonWithIconAndText } from "../../common/ButtonWithIconAndText";
import { ArrivalInfo } from "./ArrivalInfo";
interface IArrivalProps {
  sunsetLocation: SunsetLocation;
  sunsetDetails: ISunsetDetails | null;
}
export const ArrivalPopup: React.FC<IArrivalProps> = ({
  sunsetLocation,
  sunsetDetails,
}) => {
  const [, navigate] = useLocation();
  const handleGoogleSearch = () => {
    const query = encodeURIComponent(`Where is ${sunsetLocation.nameAscii}`);
    window.open(
      `https://www.google.com/search?q=${query}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
  const arrivalDateTime = getLocalTimeByUtcOffset({
    timezoneOffsetMinutes: sunsetDetails?.utc_offset ?? 0,
  });
  return (
    <Container fluid className="py-3">
      <Row className="mb-2">
        <Col>
          <ArrivalInfo
            sunsetLocation={sunsetLocation}
            arrivalDateTime={arrivalDateTime}
          />
        </Col>
        <Col className="align-content-center">
          <SunsetDetailsTable sunsetDetails={sunsetDetails} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonWithIconAndText
            variant="dark"
            onClick={handleGoogleSearch}
            text="Search Location"
            icon={<Google />}
          />
        </Col>
        <Col>
          <ButtonWithIconAndText
            variant="light"
            onClick={() => navigate("/departure")}
            text="Fly Back"
            icon={<HouseDoorFill />}
          />
        </Col>
      </Row>
    </Container>
  );
};
