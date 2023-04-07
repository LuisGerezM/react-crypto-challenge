import { CustomButton } from "@/components";
import { dictionary } from "@/schemas";
import { SubtitleText } from "@/styled-components";
import { WrapInfoWallet } from "@/views/CryptoList/styled-components";

const SectionInformWallet = ({ nameWallet, moneyAvaible, returnToWallet }) => {
  return (
    <WrapInfoWallet className='col col-12'>
      <div className='d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between'>
        <SubtitleText className='col col-3'>{nameWallet}</SubtitleText>
        <SubtitleText className='col col-3'>
          {dictionary("avaible")}: ${moneyAvaible}
        </SubtitleText>
      </div>
      <div>
        <CustomButton
          buttonClass='p-2'
          onClick={returnToWallet}
          color='red'
          text={dictionary("buyCancel")}
        />
      </div>
    </WrapInfoWallet>
  );
};
export default SectionInformWallet;
