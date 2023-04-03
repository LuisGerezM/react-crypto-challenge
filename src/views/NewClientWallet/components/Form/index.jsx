import { CustomButton, ErrorsValidationForm } from "@/components";
import { validationFields, validationRepeatField } from "@/utilities";
import useClientWalletForm from "../../hooks/useClientWalletForm";
import { newClientWalletInput } from "../../utilities";
import { Form, WrapBtnsForm } from "./styled-components";

const ClientWalletForm = () => {
  const {
    register,
    clientsWallet,
    errors,
    handleSubmit,
    onSubmit,
    cancelNewClientWallet
  } = useClientWalletForm();

  return (
    <Form className='Form col col-12'>
      {newClientWalletInput.map(element => (
        <div
          className='Form-wrap-input mb-3 col col-sm-11 col-md-8 '
          key={element.name}
        >
          <label htmlFor={element.name} className='form-label'>
            {element.label}
          </label>
          <input
            className='Form-input form-control'
            rows='7'
            type={element.type}
            id={element.name}
            name={element.name}
            placeholder={element.placeholder}
            {...register(
              element.name,
              element.name === "nameWallet"
                ? validationRepeatField(clientsWallet)[element.name]
                : validationFields[element.name]
            )}
          />
          {errors && (
            <ErrorsValidationForm errors={errors} errorKey={element.name} />
          )}
        </div>
      ))}
      <WrapBtnsForm className='col col-12'>
        <CustomButton
          text='Guardar'
          buttonClass='col col-5 col-sm-3'
          onClick={handleSubmit(onSubmit)}
        />
        <CustomButton
          text='cancelar'
          color='red'
          buttonClass='col col-5 col-sm-3'
          onClick={cancelNewClientWallet}
        />
      </WrapBtnsForm>
    </Form>
  );
};
export default ClientWalletForm;
