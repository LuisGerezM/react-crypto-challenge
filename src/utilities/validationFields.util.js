import { patterns } from "./patterns.utils";

const msgValidation = {
  required: "El campo es requerido",
  patternNumber: "Debes ingresar un número válido",
  match: {
    nameWallet: "Este nombre ya está en uso"
  }
};

export const validationFields = {
  moneyAvaible: {
    required: { value: true, message: msgValidation.required },
    pattern: {
      value: patterns.patternNumber,
      message: msgValidation.patternNumber
    }
  }
};

export const validationRepeatField = data => ({
  nameWallet: {
    required: { value: true, message: msgValidation.required },
    validate: value => {
      const nameExist = data.some(wallet => wallet.nameWallet === value);

      return !nameExist || msgValidation.match.nameWallet;
    }
  }
});
