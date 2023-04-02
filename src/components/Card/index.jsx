import { WrapCard } from "./styled-components/Card.styled";

const Card = ({ children }) => {
  return <WrapCard className='col col-12'>{children}</WrapCard>;
};
export default Card;
