import styled from "styled-components";

const Image = styled.img`
  display: ${({ loadingImage }) => (loadingImage ? "none" : "block")};
  width: ${({ width }) => width};
`;

export { Image };
