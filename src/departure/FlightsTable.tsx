import { Table } from "react-bootstrap";
import type { LatLng } from "../types";
import { FlightsTableRow } from "./FlightsTableRow";
import { getEveningPoints } from "./helpers/getEveningPoints";
import { getSunsetLocations } from "./helpers/getSunsetLocations";
import terminator from "@joergdietrich/leaflet.terminator";

export const FlightsTable: React.FC = () => {
  const currentTime = new Date();
  const terminatorInstance = terminator({
    resolution: 2,
    longitudeRange: 360,
    time: currentTime,
  });
  const allPoints: LatLng[] = terminatorInstance
    .getLatLngs()
    .flat(Infinity) as LatLng[];
  const roundedEveningPoints = getEveningPoints({
    allPoints,
    currentDayTime: currentTime,
  });
  const sunsetLocations = getSunsetLocations({ roundedEveningPoints });
  return (
    <div
      className="table-responsive rounded-3"
      style={{ boxShadow: "0 8px 32px rgba(255, 255, 255, 0.3)" }}
    >
      <Table hover variant="dark" className="mb-0">
        <thead
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1001,
          }}
        >
          <tr>
            <th>TIME</th>
            <th>DESTINATION</th>
            <th>LONGITUDE</th>
            <th>LATITUDE</th>
            <th>STATUS</th>
            <th>TICKET</th>
          </tr>
        </thead>
        <tbody>
          {sunsetLocations.map((location) => (
            <FlightsTableRow key={location.id} location={location} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
