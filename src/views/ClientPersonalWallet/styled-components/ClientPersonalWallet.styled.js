import { fadeIn, responsiveTemplate } from "@/styled-components";
import styled from "styled-components";

const WrapClientPersonalWallet = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const SectionTopClientPersonalWallet = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  ${responsiveTemplate.mobile} {
    flex-flow: column nowrap;
  }

  ${responsiveTemplate.tablet} {
    flex-flow: column nowrap;
  }
`;

const ActionsClientPersonalWallet = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 10px;
  order: 1;

  ${fadeIn}

  ${responsiveTemplate.mobile} {
    margin-top: 15px;
    justify-content: space-between;
  }

  ${responsiveTemplate.tablet} {
    margin-top: 15px;
    justify-content: space-between;
  }
`;

const SectionBottomClientPersonalWallet = styled.div`
  margin-top: 10px;
  padding-top: 10px;
`;

export {
  WrapClientPersonalWallet,
  SectionTopClientPersonalWallet,
  ActionsClientPersonalWallet,
  SectionBottomClientPersonalWallet
};
