import { Button, OverlayTrigger, Popover, Stack } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";
import { InfoSection } from "./InfoSection";
import { AttributionLink } from "./AttributionLink";

interface IInfo {
  buttonStyle?: React.CSSProperties;
}
export const Info: React.FC<IInfo> = ({ buttonStyle }: IInfo) => {
  return (
    <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={
        <Popover id="credits-info" style={{ maxWidth: 360 }} className="p-2">
          <Popover.Body>
            <Stack gap={4}>
              <InfoSection header="❤️ Made by">
                <AttributionLink
                  text="Sunny Yao"
                  href="https://medium.com/@sunnyyaoops"
                />
              </InfoSection>
              <InfoSection header="💛 Inspired by">
                <AttributionLink
                  text="The Little Prinice by Antoine de Saint-Exupéry"
                  href="https://sustainableplay.com/the-little-prince/"
                />
              </InfoSection>
              <InfoSection header="💙 Powered by">
                <AttributionLink
                  text="Terminator data: Leaflet.Terminator"
                  href="https://www.npmjs.com/package/@joergdietrich/leaflet.terminator"
                />
                <AttributionLink
                  href="https://simplemaps.com/data/world-cities"
                  text="City data: SimpleMaps.com"
                />
                <AttributionLink
                  href="https://sunrisesunset.io/api/"
                  text="Sunset detail data: SunriseSunset.io"
                />
                <AttributionLink
                  href="https://api.windy.com/"
                  text="Live webcam data: Windy.com"
                />
                <AttributionLink
                  href="https://www.npmjs.com/package/react-split-flap"
                  text="Split-flap display by chiakic"
                />
                <AttributionLink
                  href="https://unsplash.com/photos/a-black-sky-filled-with-lots-of-stars-v_YXpW9LBiM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  text="Photo by Kate Pierotti on Unsplash"
                />
                <AttributionLink
                  href="https://www.flaticon.com/free-icon/sun_3233728"
                  text="Sun icon created by Freepik on Flaticon"
                />
                <AttributionLink
                  href="https://www.flaticon.com/free-icon/helicopter_2998247"
                  text="Helicopter icon by vectorsmarket15 on Flaticon"
                />
              </InfoSection>
            </Stack>
          </Popover.Body>
        </Popover>
      }
    >
      <Button
        aria-label="Info"
        className="position-absolute bottom-0 start-0 border-0 bg-transparent p-1 m-2"
        style={{ ...buttonStyle }}
      >
        <InfoCircle size={20} />
      </Button>
    </OverlayTrigger>
  );
};
