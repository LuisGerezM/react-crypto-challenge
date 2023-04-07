import { CustomButton, ErrorsValidationForm } from "@/components";
import { useActionCryptoForm } from "@/hooks";
import { dictionary } from "@/schemas";
import { SubtitleText } from "@/styled-components";
import { validationFieldWithCtrol } from "@/utilities";
import { CriptoForm } from "./styled-components/ActionCryptoForm.styled";

const ActionCryptoForm = () => {
  const {
    moneyAvaible,
    textBy,
    dataFormModal,
    amountAvaible,
    isSell,
    errors,
    handleSubmit,
    onSubmit,
    register
  } = useActionCryptoForm();

  return (
    <>
      <SubtitleText className='ms-4 mt-4'>
        {textBy}
        {dataFormModal?.cryptoCurrency?.name}. Valor $
        {dataFormModal?.cryptoCurrency?.price} USD
      </SubtitleText>
      <CriptoForm>
        <div className='Form-wrap-input mb-3 col col-sm-11 col-md-8 '>
          <label htmlFor='amountCrypto' className='form-label'>
            {dictionary("amountAvaible")}: ${amountAvaible}
          </label>
          <input
            className='Form-input form-control'
            type='text'
            id='amountCrypto'
            name='amountCrypto'
            placeholder={dictionary(!isSell ? "amountToBuy" : "amountToSell")}
            {...register(
              "amountCrypto",
              validationFieldWithCtrol(!isSell ? moneyAvaible : amountAvaible)
                .amountCrypto
            )}
          />
          {errors && (
            <ErrorsValidationForm errors={errors} errorKey='amountCrypto' />
          )}
        </div>

        <CustomButton
          text={textBy}
          buttonClass='col col-5 col-sm-3'
          onClick={handleSubmit(onSubmit)}
        />
      </CriptoForm>
    </>
  );
};
export default ActionCryptoForm;
