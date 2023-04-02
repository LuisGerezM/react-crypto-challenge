import { fadeIn, themeColors, titleCssStyle } from "@/styled-components";
import styled from "styled-components";

const CustomAlertMsg = styled.div`
  ${titleCssStyle};
  width: 50%;
  margin: 30px auto;
  background-color: ${themeColors.red};
  color: ${themeColors.white};
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  cursor: none;

  ${fadeIn};
`;

export { CustomAlertMsg };
