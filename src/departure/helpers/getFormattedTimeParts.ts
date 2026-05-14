const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};
interface IFormattedTimePartsProp {
  time: Date;
  locale?: string | string[]; // for testing
}
interface IFormattedTimeParts {
  hour: string;
  minute: string;
  second: string;
  literal: string;
}
export const getFormattedTimeParts = ({
  time,
  locale = [],
}: IFormattedTimePartsProp): IFormattedTimeParts => {
  const timeFormatter = new Intl.DateTimeFormat(locale, TIME_FORMAT);
  const parts = timeFormatter.formatToParts(time);
  const partsMap = new Map(parts.map((part) => [part.type, part.value]));
  return {
    hour: partsMap.get("hour") || "00",
    minute: partsMap.get("minute") || "00",
    second: partsMap.get("second") || "00",
    literal: partsMap.get("literal") || ":",
  };
};
