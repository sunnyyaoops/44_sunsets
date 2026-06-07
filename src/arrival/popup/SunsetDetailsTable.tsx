import { Table } from "react-bootstrap";
import { convertTo24Hour } from "../helpers/convertTo24Hour";
import type { SunsetDetails } from "../schemas/sunsetDetailsResponseSchema";
export interface ISunsetDetailsTableProps {
  sunsetDetails: SunsetDetails | undefined;
}
export const SunsetDetailsTable: React.FC<ISunsetDetailsTableProps> = ({
  sunsetDetails,
}) => {
  return (
    <Table className="fw-bold mb-0" style={{ fontSize: 16 }}>
      <tbody>
        <tr>
          <td>Golden Hour</td>
          <td>{convertTo24Hour(sunsetDetails?.golden_hour)}</td>
        </tr>
        <tr>
          <td>Sunset</td>
          <td>{convertTo24Hour(sunsetDetails?.sunset)}</td>
        </tr>
        <tr>
          <td>Dusk</td>
          <td>{convertTo24Hour(sunsetDetails?.dusk)}</td>
        </tr>
      </tbody>
    </Table>
  );
};
