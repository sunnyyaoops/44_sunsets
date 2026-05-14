interface ITruncateText {
  maxLength: number;
  text: string;
}
export const truncateText = ({ maxLength, text }: ITruncateText): string =>
  text.length < maxLength + 1 ? text : text.slice(0, maxLength - 1) + "…";
