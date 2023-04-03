import { useNearScreen } from "@/hooks";
import { WrapCard } from "./styled-components/Card.styled";

const Card = ({ children }) => {
  const [show, ref] = useNearScreen();

  return (
    <WrapCard className='col col-12' ref={ref} show={show}>
      {show && children}
    </WrapCard>
  );
};
export default Card;
