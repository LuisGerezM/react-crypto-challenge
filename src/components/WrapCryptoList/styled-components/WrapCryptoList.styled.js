import { dropShadow, fadeIn, themeColors } from "@/styled-components";
import styled from "styled-components";

export const WrapList = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const WrapReference = styled.div`
  background-color: ${themeColors.skyBLue};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  ${dropShadow}

  ${fadeIn}

  .Ref-paragraph {
    padding-left: 15px;
    margin-top: 5px;
  }
`;
