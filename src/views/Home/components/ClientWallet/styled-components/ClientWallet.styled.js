import { fadeIn } from "@/styled-components";
import styled from "styled-components";

const WrapClientWallet = styled.div`
  display: flex;
  flex-flow: row nowrap;
  ${fadeIn}
`;

const WrapSectionHeaderClientWallet = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const WrapSectionDetailsClientWallet = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;

export {
  WrapClientWallet,
  WrapSectionHeaderClientWallet,
  WrapSectionDetailsClientWallet
};
