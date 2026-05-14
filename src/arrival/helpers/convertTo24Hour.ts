import { TIME_FORMAT } from "../../common/TIME_FORMAT";

export function convertTo24Hour(timeString: string | null | undefined) {
  if (!timeString) return "-";
  const date = new Date(`01/01/2026 ${timeString}`);
  return date.toLocaleTimeString([], TIME_FORMAT);
}
