import { Image, Stack } from "react-bootstrap";

export const DepartureSign: React.FC = () => {
  return (
    <Stack direction="horizontal" gap={2} className="align-items-start">
      <Image src="/sun.png" alt="Sunset" style={{ height: 92 }} />
      <div
        className="h2 d-none d-md-block"
        style={{
          color: "white",
          fontSize: 84,
          letterSpacing: "0.1rem",
        }}
      >
        DEPARTURES
      </div>
    </Stack>
  );
};
