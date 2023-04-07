import { v4 as uuidv4 } from "uuid";
import { handlerDates } from "./handlerDates.util";

const movementFromMoneyToCrypto = (money, cryptoValue) =>
  Number(money) / cryptoValue;

const movementTotalMoney = (arrayCryptos, moneyAvailble) =>
  arrayCryptos.reduce(
    (acc, prev) => acc + prev.price * prev.amountCriptoCurrency,
    Number(moneyAvailble)
  );

const addTransaction = (name, price, moneyInvested, amountCrypto, type) => {
  const date = handlerDates.parse(new Date());
  return {
    id: uuidv4(),
    name,
    price,
    moneyInvested,
    date,
    amountCrypto,
    type
  };
};

const movementFromCryptoToMoney = (amountCriptoCurrency, priceCriptoCurrency) =>
  amountCriptoCurrency * priceCriptoCurrency;

export {
  movementFromMoneyToCrypto,
  movementFromCryptoToMoney,
  movementTotalMoney,
  addTransaction
};
