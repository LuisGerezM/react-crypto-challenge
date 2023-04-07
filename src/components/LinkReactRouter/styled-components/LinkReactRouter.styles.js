import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  dropShadow,
  fadeIn,
  inputTextCssStyle,
  responsiveTemplate,
  themeColors
} from "@/styled-components";
import { colors } from "@/components/CustomButton/styled-components/Button.styled";

const CustomLink = styled(Link)`
  ${inputTextCssStyle}
  padding: ${({ padding }) => padding || "10px 15px"};
  text-decoration: none;
  text-align: center;
  background-color: ${({ color }) => colors(color)?.background || "none"};
  color: ${({ color }) =>
    colors(color)?.color || themeColors.betweenBlueGreed}!important;
  border-radius: ${({ borderradius }) => borderradius || "none"};
  border: ${({ color }) => `1px solid ${colors(color)?.border}` || "none"};
  transition: 0.5s;

  ${dropShadow}

  ${responsiveTemplate.desktop} {
    width: 124px;
    text-align: center;
  }

  ${responsiveTemplate.extraLarge} {
    width: 130px;
    text-align: center;
  }

  &:hover {
    background-color: ${({ color }) => colors(color)?.color || "none"};
    color: ${({ color }) =>
      colors(color)?.background || themeColors.betweenBlueGreed}!important;
    outline: ${({ color }) =>
      colors(color)?.color ||
      `1px solid ${themeColors.betweenBlueGreed}`}!important;
    filter: brightness(1.1);
  }

  ${fadeIn}
`;

export { CustomLink };
