interface IFlightStatusFlapProps {
  status: string;
  color: string;
}
export const FlightStatusFlap: React.FC<IFlightStatusFlapProps> = ({
  status,
  color,
}) => <div style={{ fontSize: "20px", color }}>{status}</div>;
