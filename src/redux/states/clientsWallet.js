import { LocalStorageTypes } from "@/models/localStorage.model";
import {
  getItemLocalStorage,
  persistLocalStorage
} from "@/utilities/localStorage.util";
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
      const clientsWallet = [
        ...current(state).clientsWallet,
        {
          id: uuidv4(),
          nameWallet: action.payload.nameWallet,
          moneyAvaible: action.payload.moneyAvaible,
          totalMoney: Number(action.payload.moneyAvaible),
          cryptos: []
        }
      ];

      persistLocalStorage(LocalStorageTypes.CLIENTS_WALLET, clientsWallet);
      return {
        ...state,
        clientsWallet
      };
    },
    deleteClientWallet: (state, action) => {
      const clientsWallet = current(state).clientsWallet.filter(
        wallet => wallet.id !== action.payload
      );

      persistLocalStorage(LocalStorageTypes.CLIENTS_WALLET, clientsWallet);

      return { ...state, clientsWallet };
    }
  }
});

export const { addClientWallet, deleteClientWallet } =
  clientsWalletSlice.actions;

export default clientsWalletSlice.reducer;
