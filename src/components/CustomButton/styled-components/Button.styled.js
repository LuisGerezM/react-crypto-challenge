import {
  dropShadow,
  fadeIn,
  inputTextCssStyle,
  themeColors
} from "@/styled-components";
import styled from "styled-components";

export const colors = color => {
  const objColors = {
    default: {
      background: themeColors.white,
      color: themeColors.blue,
      border: themeColors.blue
    },
    red: {
      background: themeColors.white,
      color: themeColors.red,
      border: themeColors.red
    },
    green: {
      background: themeColors.white,
      color: themeColors.green,
      border: themeColors.green
    },
    light: {
      background: themeColors.white,
      color: themeColors.darkBlue,
      border: themeColors.darkBlue
    },
    yellow: {
      background: themeColors.yellow,
      color: themeColors.darkBlue,
      border: themeColors.yellow
    }
  };

  return objColors[color];
};

const Button = styled.button`
  ${inputTextCssStyle}
  background-color: ${({ color }) => colors(color).background};
  color: ${({ color }) => colors(color).color};
  border: 1px solid ${({ color }) => colors(color).border};
  padding: 10px 15px;
  border-radius: 8px;
  transition: 0.5s;

  ${dropShadow}

  ${fadeIn} 

   &:hover {
    background-color: ${({ color }) => colors(color).color};
    color: ${({ color }) => colors(color).background};
    border-color: ${({ color }) => colors(color).color};
  }

  &:active {
    background-color: ${({ color }) => colors(color).color};
    color: ${({ color }) => colors(color).background};
    border-color: ${({ color }) => colors(color).color};
  }

  &:disabled {
    background-color: ${themeColors.gray};
    color: ${themeColors.white};
    border-color: ${themeColors.gray};
  }
`;

export { Button };
