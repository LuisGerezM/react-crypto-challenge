import { SmallTexts, themeColors } from "@/styled-components";

const ErrorsValidationForm = ({ errors, errorKey }) => {
  return errors[errorKey] ? (
    <SmallTexts className='Form-errors-validation mt-1' color={themeColors.red}>
      {errors[errorKey].message}
    </SmallTexts>
  ) : (
    <></>
  );
};

export default ErrorsValidationForm;
