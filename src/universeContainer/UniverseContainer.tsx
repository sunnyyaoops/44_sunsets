import { Container } from "react-bootstrap";
import { Info } from "./info/Info";
interface IUniverseContainer {
  children: React.ReactNode;
}
export const UniverseContainer: React.FC<IUniverseContainer> = ({
  children,
}: IUniverseContainer) => (
  <Container
    fluid
    className="universe-bg vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <Info />
    {children}
  </Container>
);
