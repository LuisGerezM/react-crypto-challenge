import styled from "styled-components";

const WrapImage = styled.div`
  display: ${({ wrapDisplay }) => wrapDisplay || "flex"};
  justify-content: ${({ wrapJustify }) => wrapJustify || "center"};
  align-items: ${({ wrapAlignItems }) => wrapAlignItems || "center"};
`;

const Image = styled.img`
  display: ${({ loadingImage }) => (loadingImage ? "none" : "block")};
  width: ${({ width }) => width};
`;

export { Image, WrapImage };
