import {
  GlobeAmericas,
  GlobeAsiaAustralia,
  GlobeCentralSouthAsia,
  GlobeEuropeAfrica,
} from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { HELICOPTER_SIZE } from "../common/HELICOPTER_SIZE";
import { UniverseContainer } from "../universeContainer/UniverseContainer";

export const Flying: React.FC = () => {
  const earthIcons = [
    <GlobeEuropeAfrica fontSize="50vh" />,
    <GlobeCentralSouthAsia fontSize="50vh" />,
    <GlobeAsiaAustralia fontSize="50vh" />,
    <GlobeAmericas fontSize="50vh" />,
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % earthIcons.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [earthIcons.length]);
  return (
    <UniverseContainer>
      <div className="position-relative">
        <div className="text-secondary ">{earthIcons[currentIndex]}</div>
        <img
          className="airplane-wave"
          src="/helicopter.png"
          alt="Helicopter"
          width={HELICOPTER_SIZE}
          height={HELICOPTER_SIZE}
        />
      </div>
    </UniverseContainer>
  );
};
