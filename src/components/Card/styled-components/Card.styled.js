import { fadeIn, someOtherProperties, themeColors } from "@/styled-components";
import styled from "styled-components";

const WrapCard = styled.div`
  padding: 20px 10px;
  border-radius: 12px;
  border: 2px solid ${themeColors.blueGray};
  margin-top: 10px;
  min-height: ${({ show }) => (show ? "auto" : "250px")};

  box-shadow: ${someOtherProperties.globalShadowBoxCards};

  ${fadeIn}
`;

export { WrapCard };
