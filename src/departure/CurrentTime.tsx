import { useState, useEffect } from "react";
import SplitFlap, { Presets, type SplitFlapProps } from "react-split-flap";
import { COLORS } from "../common/COLORS";
import { Stack } from "react-bootstrap";
import { getFormattedTimeParts } from "./helpers/getFormattedTimeParts";
const customSplitFlapStyle: Omit<SplitFlapProps, "value"> = {
  fontColor: COLORS.RED,
  chars: Presets.NUM,
  length: 2,
  hinge: false,
};
const customColonStyle: React.CSSProperties = {
  color: COLORS.RED,
  marginLeft: 1,
  marginRight: 1,
};
export const CurrentTime: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const { hour, minute, second, literal } = getFormattedTimeParts({ time });
  return (
    <Stack direction="horizontal" className="align-items-center">
      <SplitFlap value={hour} {...customSplitFlapStyle} />
      <h2 style={customColonStyle}>{literal}</h2>
      <SplitFlap value={minute} {...customSplitFlapStyle} />
      <h2 style={customColonStyle}>{literal}</h2>
      <SplitFlap value={second} {...customSplitFlapStyle} />
    </Stack>
  );
};
