import { ActionCryptoForm, CustomModal } from "@/components";
import { FormProvider } from "react-hook-form";
import { SectionInformWallet } from "./components/Sections";
import SectionActionClientWallet from "./components/Sections/SectionActionClientWallet";
import { useCryptoList } from "./hooks/useCryptoList";

const CryptoList = () => {
  const {
    nameWallet,
    moneyAvaible,
    returnToWallet,
    cryptoListToRender,
    loading,
    addCryptoInClientWallet,
    idWallet,
    modalShow,
    register,
    errors,
    handleSubmit,
    dataFormModal,
    hideModal
  } = useCryptoList();

  return (
    <div>
      <SectionInformWallet
        nameWallet={nameWallet}
        moneyAvaible={moneyAvaible}
        returnToWallet={returnToWallet}
      />
      <SectionActionClientWallet
        addCryptoInClientWallet={addCryptoInClientWallet}
        idWallet={idWallet}
        loading={loading}
        cryptoListToRender={cryptoListToRender}
      />
      <CustomModal show={modalShow} onHide={hideModal}>
        <FormProvider
          {...{
            register,
            errors,
            handleSubmit,
            moneyAvaible,
            dataFormModal,
            hideModal
          }}
        >
          <ActionCryptoForm />
        </FormProvider>
      </CustomModal>
    </div>
  );
};
export default CryptoList;
