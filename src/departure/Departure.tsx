import { FlightsTable } from "./FlightsTable";
import { CurrentTime } from "./CurrentTime";
import { Stack } from "react-bootstrap";
import { UniverseContainer } from "../universeContainer/UniverseContainer";
import { DepartureSign } from "./DepartureSign";

export const Departure: React.FC = () => {
  return (
    <UniverseContainer>
      <Stack className="h-100 p-5">
        <Stack direction="horizontal" className="justify-content-between mb-2">
          <DepartureSign />
          <CurrentTime />
        </Stack>
        <FlightsTable />
      </Stack>
    </UniverseContainer>
  );
};
