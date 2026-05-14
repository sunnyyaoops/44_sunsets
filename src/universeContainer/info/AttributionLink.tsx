import { ListGroup } from "react-bootstrap";
interface IAttributionLink {
  text: string;
  href: string;
}
export const AttributionLink: React.FC<IAttributionLink> = ({
  text,
  href,
}: IAttributionLink) => (
  <ListGroup.Item
    action
    active={false}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variant="secondary"
    className="text-nowrap"
  >
    {text}
    <span className="visually-hidden"> (opens in a new tab)</span>
  </ListGroup.Item>
);
