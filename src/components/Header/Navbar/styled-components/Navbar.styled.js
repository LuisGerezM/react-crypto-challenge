import { fadeIn, someOtherProperties, themeColors } from "@/styled-components";
import styled from "styled-components";

const WrapNavbar = styled.div`
  background-color: ${themeColors.transparentBlue};
  padding: 25px 15px;
  position: fixed;
  width: 100%;
  box-shadow: ${someOtherProperties.globalShadowBoxCards};
  z-index: 2;

  ${fadeIn}
`;

export { WrapNavbar };
