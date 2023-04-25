import { CustomButton, ErrorsValidationForm } from "@/components";
import { validationFields, validationFieldWithCtrol } from "@/utilities";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { newClientWalletInput } from "../../views/NewClientWallet/utilities";
import { Form, WrapBtnsForm } from "./styled-components";

const ClientWalletForm = ({ cancelOperation, onSubmit }) => {
  const { clientsWallet } = useSelector(store => store.clientsWallet);
  const { register, errors, handleSubmit, clientWallet } = useFormContext();

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
            type={element.type}
            id={element.name}
            name={element.name}
            placeholder={element.placeholder}
            {...register(
              element.name,
              element.name === newClientWalletInput[0].name
                ? validationFieldWithCtrol({
                    clientsWallet,
                    nameWallet: clientWallet?.nameWallet
                  })[element.name]
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
        {!clientWallet && (
          <CustomButton
            text='cancelar'
            color='red'
            buttonClass='col col-5 col-sm-3'
            onClick={cancelOperation}
          />
        )}
      </WrapBtnsForm>
    </Form>
  );
};
export default ClientWalletForm;
