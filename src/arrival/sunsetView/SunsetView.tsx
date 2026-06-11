import { Tooltip, OverlayTrigger, Carousel, Image } from "react-bootstrap";
import { LeafletControlContainer } from "./LeafletControlContainer";
import type { Webcam } from "../schemas/webcamResponseSchema";
import sunsetIllustration from "../../assets/sunset_illustration_from_The_Little_Prince.png";
import type { CSSProperties } from "react";
interface ISunsetViewProps {
  webcams: Webcam[];
}
const imageStyle: CSSProperties = {
  width: 340,
  aspectRatio: "1/1",
};
export const SunsetView: React.FC<ISunsetViewProps> = ({ webcams }) => {
  const hasWebcams = webcams.length > 0;
  return (
    <LeafletControlContainer position="bottomright">
      <OverlayTrigger
        placement="top"
        container={document.body}
        overlay={
          <Tooltip id="sunset-photos-description">
            {hasWebcams ? (
              "Live sunsets within 100km, including surrounding cities."
            ) : (
              <>
                No live views available. <br /> Pull up a chair and enjoy the
                sunset with the little prince.
              </>
            )}
          </Tooltip>
        }
        popperConfig={{
          modifiers: [
            {
              name: "offset",
              options: { offset: [0, 12] },
            },
          ],
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          {hasWebcams ? (
            <Carousel
              interval={5000}
              pause="hover"
              slide={false}
              controls={webcams.length > 1}
              indicators={webcams.length > 1}
            >
              {webcams.map((webcam, index) => (
                <Carousel.Item key={`webcam-${index}-${webcam.webcamId}`}>
                  <Image
                    roundedCircle
                    src={webcam.images.current.preview}
                    alt={webcam.title}
                    style={{ ...imageStyle, objectFit: "cover" }}
                  />
                  <Carousel.Caption className="start-50 translate-middle-x w-75 px-1">
                    <p
                      className="mb-1"
                      style={{ textShadow: "1px 1px 3px black" }}
                    >
                      {webcam.title}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Image
              src={sunsetIllustration}
              alt="Watching sunset with the little prince"
              roundedCircle
              className="bg-white"
              style={{ ...imageStyle, objectFit: "contain" }}
            />
          )}
        </div>
      </OverlayTrigger>
    </LeafletControlContainer>
  );
};
