import { movementFromMoneyToCrypto, toFixedCryptoNumber } from "@/utilities";

export const paragraphSchema = [
  {
    paragraph: crypto => (
      <>
        <b>INV: </b> ${toFixedCryptoNumber(crypto.moneyInvested)}
      </>
    )
  },
  {
    paragraph: crypto => (
      <>
        <b>AMNT: </b>$
        {toFixedCryptoNumber(
          movementFromMoneyToCrypto(crypto.moneyInvested, crypto.price),
          5
        )}
      </>
    )
  },
  {
    paragraph: crypto => (
      <>
        <b>QP: </b>$
        {toFixedCryptoNumber(
          crypto.amountCriptoCurrency * crypto.price - crypto.moneyInvested
        )}
      </>
    )
  }
];
