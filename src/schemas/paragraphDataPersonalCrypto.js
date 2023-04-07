import { movementFromMoneyToCrypto, toFixedCryptoNumber } from "@/utilities";

export const paragraphSchema = [
  {
    paragraph: crypto => `INV: $${toFixedCryptoNumber(crypto.moneyInvested)}`
  },
  {
    paragraph: crypto => `AMNT: $
          ${toFixedCryptoNumber(
            movementFromMoneyToCrypto(crypto.moneyInvested, crypto.price),
            5
          )}`
  },
  {
    paragraph: crypto => `QP: $
          ${toFixedCryptoNumber(
            crypto.amountCriptoCurrency * crypto.price - crypto.moneyInvested
          )}`
  }
];
