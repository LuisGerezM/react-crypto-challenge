import styled from "styled-components";
import { fadeIn, responsiveTemplate } from "@/styled-components";

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const WrapCryptoCard = styled.div`
  display: flex;
  ${fadeIn}
`;

const WrapNameAndIconCrypto = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const WrapNameAndSymbol = styled.div`
  margin-left: 8px;
`;

const WrapPriceAndPercentCrypto = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  ${responsiveTemplate.mobile} {
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const WrapStatusPercent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const WrapChildrenCryptoCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
`;

export {
  Card,
  WrapNameAndIconCrypto,
  WrapPriceAndPercentCrypto,
  WrapStatusPercent,
  WrapNameAndSymbol,
  WrapCryptoCard,
  WrapChildrenCryptoCard
};
