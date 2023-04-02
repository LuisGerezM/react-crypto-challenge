import styled, { css } from "styled-components";
import { responsiveTemplate } from "./responsiveTemplate.styled";
import { themeColors } from "./Theme.styled";

const fontFamily = "'Rubik', sans-serif";

const typography = {
  mobileTitle: () => css`
    font: 700 33px/40px ${fontFamily};
  `,
  mobileSsubTitle: () => css`
    font: 400 23px/16px ${fontFamily};
  `,
  mobileInputText: () => css`
    font: 400 13px/14px ${fontFamily};
  `,
  mobileSmallText: () => css`
    font: 300 11px/20px ${fontFamily};
  `,
  title: () => css`
    font: 700 40px/76px ${fontFamily};
  `,
  subTitle: () => css`
    font: 400 30px/20px ${fontFamily};
  `,
  desktopInputText: () => css`
    font: 300 20px/19px ${fontFamily};
  `,
  desktopSmallText: () => css`
    font: 300 15px/20px ${fontFamily};
  `
};

const titleCssStyle = css`
  color: ${({ color }) => color || themeColors.darkBlue};
  ${typography.mobileTitle()}

  ${responsiveTemplate.desktop} {
    ${typography.title()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.title()}
  }
`;

const subtitleCssStyle = css`
  color: ${({ color }) => color || themeColors.darkBlue};
  ${typography.mobileSsubTitle()}
  line-height: 30px !important;

  ${responsiveTemplate.desktop} {
    ${typography.subTitle()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.subTitle()}
  }
`;

const inputTextCssStyle = css`
  color: ${({ color }) => color || themeColors.darkBlue};
  ${typography.mobileInputText()}

  ${responsiveTemplate.desktop} {
    ${typography.desktopInputText()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.desktopInputText()}
  }
`;

const smallTextCssStyle = css`
  color: ${({ color }) => color || themeColors.darkBlue};
  ${typography.mobileSmallText()};

  ${responsiveTemplate.desktop} {
    ${typography.desktopSmallText()};
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.desktopSmallText()};
  }
`;

const TitleText = styled.h1`
  ${() =>
    css`
      ${titleCssStyle}
    `};
`;

const SubtitleText = styled.h3`
  ${() =>
    css`
      ${subtitleCssStyle}
    `};
`;

const InputTexts = styled.h6`
  ${() =>
    css`
      ${inputTextCssStyle}
    `};
`;

const SmallTexts = styled.h6`
  ${() =>
    css`
      ${smallTextCssStyle};
    `};
`;

export {
  typography,
  TitleText,
  SubtitleText,
  InputTexts,
  SmallTexts,
  smallTextCssStyle,
  titleCssStyle,
  subtitleCssStyle,
  inputTextCssStyle
};
