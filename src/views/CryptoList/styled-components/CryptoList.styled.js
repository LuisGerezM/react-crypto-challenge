import { responsiveTemplate } from "@/styled-components";
import styled from "styled-components";

export const WrapInfoWallet = styled.div`
  padding: 30px 20px 15px;
  display: flex;
  justify-content: space-between;

  ${responsiveTemplate.mobile} {
    justify-content: space-evenly;
  }
`;
