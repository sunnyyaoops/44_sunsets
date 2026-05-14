import { Button } from "react-bootstrap";
import type { ButtonVariant } from "react-bootstrap/esm/types";
interface IButtonWithIconAndText {
  icon: React.ReactNode;
  text: string;
  variant: ButtonVariant;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
  style?: React.CSSProperties;
}
export const ButtonWithIconAndText: React.FC<IButtonWithIconAndText> = ({
  icon,
  text,
  variant,
  onClick,
  ariaLabel,
  style,
}: IButtonWithIconAndText) => {
  return (
    <Button
      aria-label={ariaLabel}
      size="sm"
      variant={variant}
      className="d-flex align-items-center justify-content-center gap-2 w-100"
      onClick={onClick}
      style={style}
    >
      {icon} {text}
    </Button>
  );
};
