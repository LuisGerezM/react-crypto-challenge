import { ActionCryptoForm, CustomModal } from "@/components";
import { FormProvider } from "react-hook-form";
import ModalShowEditWallet from "./components/ModalShowEditWallet";
import ModalShowTansactions from "./components/ModalShowTansactions";
import {
  BottomClientPersonalWallet,
  TopClientPersonalWallet
} from "./components/Sections";
import { useClientPersonalWallet } from "./hooks";
import { WrapClientPersonalWallet } from "./styled-components";

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
