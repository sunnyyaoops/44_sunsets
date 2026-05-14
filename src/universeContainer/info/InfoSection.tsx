import { ListGroup } from "react-bootstrap";
interface IInfoSection {
  header: string;
  children: React.ReactNode | React.ReactNode[];
}
export const InfoSection: React.FC<IInfoSection> = ({
  header,
  children,
}: IInfoSection) => {
  const id = header.replace(" ", "_");
  return (
    <div>
      <span id={id} className="h6 fw-bold">
        {header}
      </span>
      <ListGroup variant="flush" aria-labelledby={id} className="mt-2">
        {...[children]}
      </ListGroup>
    </div>
  );
};
