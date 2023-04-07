import { useNearScreen } from "@/hooks";
import { WrapCard } from "./styled-components/Card.styled";

const Card = ({ children, cardClass, borderColor, minHeight }) => {
  const [show, ref] = useNearScreen();

  return (
    <WrapCard
      className={"WrapCard " + cardClass || "col col-12"}
      borderColor={borderColor}
      ref={ref}
      minHeight={minHeight}
    >
      {show && children}
    </WrapCard>
  );
};
export default Card;
