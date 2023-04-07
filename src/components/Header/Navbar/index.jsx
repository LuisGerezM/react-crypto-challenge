import { dictionary } from "@/schemas";
import { themeColors } from "@/styled-components/Theme.styled";
import { SubtitleText } from "@/styled-components/typography.styled";
import { WrapNavbar } from "./styled-components/Navbar.styled";

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
