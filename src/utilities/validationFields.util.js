import { patterns } from "./patterns.utils";

const msgValidation = {
  required: "El campo es requerido",
  patternNumber: "Debes ingresar un número válido",
  match: {
    nameWallet: "Este nombre ya está en uso",
    amountNoAvaible: "No puede superar la cantidad disponible."
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

export const validationFieldWithCtrol = data => ({
  nameWallet: {
    required: { value: true, message: msgValidation.required },
    validate: value => {
      const nameExist = data.some(wallet => wallet.nameWallet === value);
      return !nameExist || msgValidation.match.nameWallet;
    }
  },
  amountCrypto: {
    required: { value: true, message: msgValidation.required },
    pattern: {
      value: patterns.patternNumber,
      message: msgValidation.patternNumber
    },
    validate: value => {
      return (
        !(Number(value) > Number(data)) || msgValidation.match.amountNoAvaible
      );
    }
  }
});
