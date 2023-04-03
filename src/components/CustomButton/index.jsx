import { Button } from "./styled-components/Button.styled";

const CustomButton = ({
  buttonClass = "",
  color = "default",
  onClick,
  text,
  type = "button",
  disabled = false
}) => {
  return (
    <Button
      className={buttonClass}
      type={type}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
