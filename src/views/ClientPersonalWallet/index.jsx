import {
  ActionCryptoForm,
  AlertMsg,
  Card,
  CustomButton,
  CustomImage,
  CustomModal,
  WrapCryptoList
} from "@/components";
import { dictionary } from "@/schemas";
import { SubtitleText, TitleText } from "@/styled-components";
import { FormProvider } from "react-hook-form";
import ModalShowEditWallet from "./components/ModalShowEditWallet";
import ModalShowTansactions from "./components/ModalShowTansactions";
import { TopClientPersonalWallet } from "./components/Sections";
import BottomClientPersonalWallet from "./components/Sections/SectionBottomClientPersonalWallet";
import { useClientPersonalWallet } from "./hooks";
import {
  ActionsClientPersonalWallet,
  SectionBottomClientPersonalWallet,
  WrapClientPersonalWallet
} from "./styled-components";

const ClientPersonalWallet = () => {
  const {
    clientWallet,
    whatShowModal,
    newCrypto,
    idWallet,
    changeClientWalletStatus,
    modalShow,
    hideModal,
    whatRenderModal,
    register,
    errors,
    handleSubmit,
    dataFormModal
  } = useClientPersonalWallet();

  return (
    <WrapClientPersonalWallet className='WrapClientPersonalWallet'>
      <TopClientPersonalWallet
        clientWallet={clientWallet}
        whatShowModal={whatShowModal}
        newCrypto={newCrypto}
        idWallet={idWallet}
      />
      <BottomClientPersonalWallet
        clientWallet={clientWallet}
        changeClientWalletStatus={changeClientWalletStatus}
        idWallet={idWallet}
      />
      {/* <SectionBottomClientPersonalWallet clasName='SectionBottomClientPersonalWallet'>
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
      </SectionBottomClientPersonalWallet> */}

      <CustomModal show={modalShow} onHide={hideModal}>
        {whatRenderModal === "transactions" && (
          <ModalShowTansactions clientWallet={clientWallet} />
        )}
        {whatRenderModal === "editWallet" && (
          <ModalShowEditWallet clientWallet={clientWallet} />
        )}
        {whatRenderModal === "cryptoAction" && (
          <FormProvider
            {...{
              register,
              errors,
              handleSubmit,
              moneyAvaible: clientWallet.moneyAvaible,
              dataFormModal,
              hideModal
            }}
          >
            <ActionCryptoForm />
          </FormProvider>
        )}
      </CustomModal>
    </WrapClientPersonalWallet>
  );
};

export default ClientPersonalWallet;
