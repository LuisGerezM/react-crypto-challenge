import ClientWalletForm from "@/components/Form";
import { FormProvider } from "react-hook-form";
import { useModalShowEditWallet } from "../../hooks";

const ModalShowEditWallet = ({ clientWallet }) => {
  const { register, errors, handleSubmit, onSubmit } =
    useModalShowEditWallet(clientWallet);

  return (
    <FormProvider {...{ register, clientWallet, errors, handleSubmit }}>
      <ClientWalletForm onSubmit={onSubmit} />
    </FormProvider>
  );
};
export default ModalShowEditWallet;
