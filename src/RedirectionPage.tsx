import { Link } from "wouter";
import { UniverseContainer } from "./universeContainer/UniverseContainer";

export const RedirectionPage: React.FC = () => (
  <UniverseContainer>
    <p className="text-center h5 text-light">
      Looks like you're lost...&nbsp;
      <Link
        href="/"
        style={{ textDecoration: "none" }}
        role="button"
        tabIndex={0}
      >
        Fly Home now! ✈️
      </Link>
    </p>
  </UniverseContainer>
);
