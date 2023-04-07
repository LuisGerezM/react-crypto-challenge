import { LocalStorageTypes } from "@/models";
import { dictionary } from "@/schemas";
import {
  addTransaction,
  arrayFilterBy,
  findInArrayBy,
  getItemLocalStorage,
  movementFromCryptoToMoney,
  movementFromMoneyToCrypto,
  movementTotalMoney,
  orderArrayBy,
  persistLocalStorage
} from "@/utilities";

import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialClientsWalletState = {
  loading: false,
  clientsWallet: [],
  success: { status: false, message: "", action: "" },
  error: { status: false, message: "", action: "" }
};

const clientsWalletSlice = createSlice({
  name: "clientsWallet",
  initialState: {
    ...initialClientsWalletState,
    clientsWallet:
      getItemLocalStorage(LocalStorageTypes.CLIENTS_WALLET) ||
      initialClientsWalletState.clientsWallet
  },
  reducers: {
    addClientWallet: (state, action) => {
      const clientsWallet = orderArrayBy(
        [
          ...current(state).clientsWallet,
          {
            id: uuidv4(),
            nameWallet: action.payload.nameWallet,
            moneyAvaible: Number(action.payload.moneyAvaible),
            totalMoney: Number(action.payload.moneyAvaible),
            cryptos: [],
            transactions: {}
          }
        ],
        "totalMoney"
      );

      persistLocalStorage(LocalStorageTypes.CLIENTS_WALLET, clientsWallet);
      return {
        ...state,
        clientsWallet
      };
    },
    editNameAndMoneyClientWallet: (state, action) => {
      const nameWallet = action.payload.data.nameWallet;
      const addedMoney =
        action.payload.clientWallet.moneyAvaible +
        Number(action.payload.data.moneyAvaible);

      const totalMoney = movementTotalMoney(
        action.payload.clientWallet.cryptos,
        addedMoney
      );

      const clientWallet = {
        ...action.payload.clientWallet,
        moneyAvaible: addedMoney,
        nameWallet,
        totalMoney
      };

      const clientsWallet = [
        ...arrayFilterBy(current(state).clientsWallet, "id", clientWallet.id),
        clientWallet
      ];

      persistLocalStorage(LocalStorageTypes.CLIENTS_WALLET, clientsWallet);

      return {
        ...state,
        success: {
          status: true,
          message: dictionary("successfulOperation"),
          action: "deleteOneTransactionClientWallet"
        },
        clientsWallet
      };
    },
    deleteClientWallet: (state, action) => {
      const clientsWallet = arrayFilterBy(
        current(state).clientsWallet,
        "id",
        action.payload
      );

      persistLocalStorage(LocalStorageTypes.CLIENTS_WALLET, clientsWallet);

      return { ...state, clientsWallet };
    },
    addCryptoInClientWallet: (state, action) => {
      const fetchClientWallet = findInArrayBy(
        current(state).clientsWallet,
        "id",
        action.payload.dataFormModal.idWallet
      );

      const filterWallet = arrayFilterBy(
        current(state).clientsWallet,
        "id",
        action.payload.dataFormModal.idWallet
      );

      const { id, image, name, price, symbol } =
        action.payload.dataFormModal.cryptoCurrency;

      const moneyInvested = Number(action.payload.amount);

      const amountCriptoCurrency = movementFromMoneyToCrypto(
        action.payload.amount,
        action.payload.dataFormModal.cryptoCurrency.price
      );

      const cryptos = [
        ...fetchClientWallet.cryptos,
        {
          id,
          image,
          name,
          price,
          symbol,
          moneyInvested,
          amountCriptoCurrency,
          percent: action.payload.dataFormModal.cryptoCurrency.percent
        }
      ];

      const moneyAvaible =
        fetchClientWallet.moneyAvaible - action.payload.amount;

      const totalMoney = movementTotalMoney(
        cryptos,
        moneyAvaible,
        amountCriptoCurrency
      );

      const transaction = addTransaction(
        name,
        price,
        moneyInvested,
        amountCriptoCurrency,
        "buy"
      );

      let transactions;
      if (Object.keys(fetchClientWallet.transactions).length) {
        transactions = {
          ...fetchClientWallet.transactions,
          buy: [...fetchClientWallet.transactions.buy, transaction]
        };
      } else {
        transactions = {
          buy: [transaction]
        };
      }

      const clientWallet = {
        ...fetchClientWallet,
        moneyAvaible,
        cryptos,
        totalMoney,
        transactions
      };

      const clientsWallet = [...filterWallet, clientWallet];

      persistLocalStorage(LocalStorageTypes.CLIENTS_WALLET, clientsWallet);

      return {
        ...state,
        success: {
          status: true,
          message: dictionary("successfulOperation"),
          action: "addCryptoInClientWallet"
        },
        clientsWallet
      };
    },
    addMoreOfSomeCryptoInClientWallet: (state, action) => {
      const fetchClientWallet = findInArrayBy(
        current(state).clientsWallet,
        "id",
        action.payload.dataFormModal.idWallet
      );

      const { id, image, name, price, symbol } =
        action.payload.dataFormModal.cryptoCurrency;

      const fetchCryptoSelected = findInArrayBy(
        fetchClientWallet.cryptos,
        "id",
        id
      );

      const moneyInvested = Number(action.payload.amount);

      const amountCriptoCurrency = movementFromMoneyToCrypto(
        action.payload.amount,
        action.payload.dataFormModal.cryptoCurrency.price
      );

      const cryptos = [
        ...arrayFilterBy(fetchClientWallet.cryptos, "id", id),
        {
          id,
          image,
          name,
          price,
          symbol,
          moneyInvested: moneyInvested + fetchCryptoSelected.moneyInvested,
          amountCriptoCurrency:
            amountCriptoCurrency + fetchCryptoSelected.amountCriptoCurrency,
          percent: action.payload.dataFormModal.cryptoCurrency.percent
        }
      ];

      const moneyAvaible =
        fetchClientWallet.moneyAvaible - action.payload.amount;

      const totalMoney = movementTotalMoney(
        cryptos,
        moneyAvaible,
        amountCriptoCurrency
      );

      const transaction = addTransaction(
        name,
        price,
        moneyInvested,
        amountCriptoCurrency,
        "update"
      );

      let transactions;
      if (fetchClientWallet.transactions.hasOwnProperty("update")) {
        transactions = {
          ...fetchClientWallet.transactions,
          update: [...fetchClientWallet.transactions.update, transaction]
        };
      } else {
        transactions = {
          ...fetchClientWallet.transactions,
          update: [transaction]
        };
      }

      const clientWallet = {
        ...fetchClientWallet,
        moneyAvaible,
        cryptos,
        totalMoney,
        transactions
      };

      const clientsWallet = [
        ...arrayFilterBy(
          current(state).clientsWallet,
          "id",
          action.payload.dataFormModal.idWallet
        ),
        clientWallet
      ];

      persistLocalStorage(LocalStorageTypes.CLIENTS_WALLET, clientsWallet);

      return {
        ...state,
        success: {
          status: true,
          message: dictionary("successfulOperation"),
          action: "addMoreOfSomeCryptoInClientWallet"
        },
        clientsWallet
      };
    },
    sellCryptoInClientWallet: (state, action) => {
      const fetchClientWallet = findInArrayBy(
        current(state).clientsWallet,
        "id",
        action.payload.dataFormModal.idWallet
      );

      const { id, image, name, price, symbol } =
        action.payload.dataFormModal.cryptoCurrency;

      const fetchCryptoSelected = findInArrayBy(
        fetchClientWallet.cryptos,
        "id",
        id
      );

      const moneyInvested = Number(action.payload.amount);

      const amountCryptoToSold = movementFromMoneyToCrypto(
        action.payload.amount,
        action.payload.dataFormModal.cryptoCurrency.price
      );

      const amountMoneyAccordCrypto = movementFromCryptoToMoney(
        amountCryptoToSold,
        action.payload.dataFormModal.cryptoCurrency.price
      );

      const moneyAvaible =
        fetchClientWallet.moneyAvaible + Math.ceil(amountMoneyAccordCrypto);

      let cryptos;
      if (fetchCryptoSelected.moneyInvested - amountMoneyAccordCrypto === 0) {
        cryptos = arrayFilterBy(fetchClientWallet.cryptos, "id", id);
      } else {
        cryptos = [
          ...arrayFilterBy(fetchClientWallet.cryptos, "id", id),
          {
            id,
            image,
            name,
            price,
            symbol,
            moneyInvested: fetchCryptoSelected.moneyInvested - moneyInvested,
            amountCriptoCurrency:
              fetchCryptoSelected.amountCriptoCurrency - amountCryptoToSold,
            percent: action.payload.dataFormModal.cryptoCurrency.percent
          }
        ];
      }

      const totalMoney = movementTotalMoney(
        orderArrayBy(cryptos, "price"),
        moneyAvaible
      );

      const transaction = addTransaction(
        name,
        price,
        moneyInvested,
        fetchCryptoSelected.amountCriptoCurrency,
        "sell"
      );

      let transactions;
      if (fetchClientWallet.transactions.hasOwnProperty("sell")) {
        transactions = {
          ...fetchClientWallet.transactions,
          sell: [...fetchClientWallet.transactions.sell, transaction]
        };
      } else {
        transactions = {
          ...fetchClientWallet.transactions,
          sell: [transaction]
        };
      }

      const clientWallet = {
        ...fetchClientWallet,
        moneyAvaible,
        cryptos,
        totalMoney,
        transactions
      };

      const clientsWallet = [
        ...arrayFilterBy(
          current(state).clientsWallet,
          "id",
          action.payload.dataFormModal.idWallet
        ),
        clientWallet
      ];

      persistLocalStorage(LocalStorageTypes.CLIENTS_WALLET, clientsWallet);

      return {
        ...state,
        success: {
          status: true,
          message: dictionary("successfulOperation"),
          action: "sellCryptoInClientWallet"
        },
        clientsWallet
      };
    },
    deleteTransaction: (state, action) => {
      const findTransactionsByType =
        action.payload.clientWallet.transactions[action.payload.type];

      const filterTransaction = arrayFilterBy(
        findTransactionsByType,
        "id",
        action.payload.id
      );

      const clientWallet = {
        ...action.payload.clientWallet,
        transactions: {
          ...action.payload.clientWallet.transactions,
          [action.payload.type]: filterTransaction
        }
      };

      const clientsWallet = [
        ...arrayFilterBy(current(state).clientsWallet, "id", clientWallet.id),
        clientWallet
      ];

      persistLocalStorage(LocalStorageTypes.CLIENTS_WALLET, clientsWallet);

      return {
        ...state,
        success: {
          status: true,
          message: dictionary("successfulOperation"),
          action: "deleteOneTransactionClientWallet"
        },
        clientsWallet
      };
    },
    resetStatus: (state, action) => ({
      ...state,
      loading: false,
      success: { status: false, message: "", action: "" },
      error: { status: false, message: "", action: "" }
    })
  }
});

export const {
  addClientWallet,
  deleteClientWallet,
  addCryptoInClientWallet,
  addMoreOfSomeCryptoInClientWallet,
  sellCryptoInClientWallet,
  deleteTransaction,
  editNameAndMoneyClientWallet,
  resetStatus
} = clientsWalletSlice.actions;

export default clientsWalletSlice.reducer;
