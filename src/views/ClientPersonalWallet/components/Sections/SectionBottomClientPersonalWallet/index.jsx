import { AlertMsg, CustomButton, WrapCryptoList } from "@/components";
import { dictionary } from "@/schemas";
import { SectionBottomClientPersonalWallet } from "@/views/ClientPersonalWallet/styled-components";

const BottomClientPersonalWallet = ({
  clientWallet,
  changeClientWalletStatus,
  idWallet
}) => {
  return (
    <SectionBottomClientPersonalWallet clasName='SectionBottomClientPersonalWallet'>
      {clientWallet?.cryptos?.length ? (
        <WrapCryptoList
          action={changeClientWalletStatus}
          idWallet={idWallet}
          criptoArray={clientWallet.cryptos}
          childJustifyContent='space-between'
          reference='all'
        >
          <CustomButton
            buttonClass='col col col-12 col-sm-10 col-lg-6'
            text={dictionary("buy")}
            color='light'
            param='update'
          />
          <CustomButton
            buttonClass='col col col-12 col-sm-10 col-lg-5 mt-1 mt-lg-0'
            text={dictionary("sell")}
            color='red'
            param='sell'
          />
        </WrapCryptoList>
      ) : (
        <AlertMsg text={dictionary("noCryptos")} />
      )}
    </SectionBottomClientPersonalWallet>
  );
};
export default BottomClientPersonalWallet;
