import { dictionary } from "@/schemas";
import { fadeIn } from "@/styled-components/animation.styled";
import { someOtherProperties } from "@/styled-components/App.styled";
import { themeColors } from "@/styled-components/Theme.styled";
import { SubtitleText } from "@/styled-components/typography.styled";
import styled from "styled-components";

const Navbar = () => {
  return (
    <WrapNavbar className='WrapNavbar'>
      <SubtitleText color={themeColors.white}>
        {dictionary("investmentComp")}
      </SubtitleText>
    </WrapNavbar>
  );
};
export default Navbar;

const WrapNavbar = styled.div`
  background-color: ${themeColors.transparentBlue};
  padding: 25px 15px;
  position: fixed;
  width: 100%;
  box-shadow: ${someOtherProperties.globalShadowBoxCards};
  z-index: 5000;

  ${fadeIn}
`;
