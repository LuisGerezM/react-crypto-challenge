import { fadeIn, someOtherProperties, themeColors } from "@/styled-components";
import styled from "styled-components";

const WrapCard = styled.div`
  padding: 20px 10px;
  border-radius: 12px;
  border: ${({ borderColor }) =>
    `2px solid ${themeColors[borderColor] || themeColors.blueGray}`};
  margin-top: 10px;
  min-height: ${({ minHeight }) => minHeight || "160px"};

  box-shadow: ${someOtherProperties.globalShadowBoxCards};

  ${fadeIn}
`;

export { WrapCard };
