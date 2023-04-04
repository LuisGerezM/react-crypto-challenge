import { LocalStorageTypes } from "@/models/localStorage.model";
import {
  getItemLocalStorage,
  persistLocalStorage
} from "@/utilities/localStorage.util";
import { createSlice } from "@reduxjs/toolkit";

const listOfCryptos = [];

const listCryptocurrencySlice = createSlice({
  name: "listCryptocurrency",
  initialState:
    getItemLocalStorage(LocalStorageTypes.LIST_OF_CRYPTO) || listOfCryptos,
  reducers: {
    addCryptoList: (state, action) => {
      persistLocalStorage(LocalStorageTypes.LIST_OF_CRYPTO, action.payload);

      return action.payload;
    }
  }
});

export const { addCryptoList } = listCryptocurrencySlice.actions;

export default listCryptocurrencySlice.reducer;
