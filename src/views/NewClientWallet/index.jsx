import { Card, Form } from "@/components";
import { dictionary } from "@/schemas";
import { TitleText } from "@/styled-components";
import { FormProvider } from "react-hook-form";
import useClientWalletForm from "./hooks/useClientWalletForm";

const NewClientWallet = () => {
  const { register, errors, handleSubmit, onSubmit, cancelNewClientWallet } =
    useClientWalletForm();

  return (
    <Card>
      <TitleText className='text-center text-sm-start'>
        {dictionary("createNewWallet")}
      </TitleText>
      <FormProvider {...{ register, errors, handleSubmit }}>
        <Form cancelOperation={cancelNewClientWallet} onSubmit={onSubmit} />
      </FormProvider>
    </Card>
  );
};
export default NewClientWallet;
