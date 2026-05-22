import { Button } from "react-bootstrap";
import type { ButtonVariant } from "react-bootstrap/esm/types";
interface IButtonWithIconAndTextProps {
  text: string;
  variant: ButtonVariant;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  ariaLabel?: string;
  style?: React.CSSProperties;
}
export const ButtonWithIconAndText: React.FC<IButtonWithIconAndTextProps> = ({
  startIcon,
  text,
  variant,
  onClick,
  ariaLabel,
  style,
  endIcon,
}: IButtonWithIconAndTextProps) => {
  return (
    <Button
      aria-label={ariaLabel}
      size="sm"
      variant={variant}
      className="d-flex align-items-center justify-content-center gap-2 w-100"
      onClick={onClick}
      style={style}
    >
      {startIcon && startIcon}
      {text}
      {endIcon && endIcon}
    </Button>
  );
};
