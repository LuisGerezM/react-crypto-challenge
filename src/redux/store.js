import { configureStore } from "@reduxjs/toolkit";

import { clientsWalletSlice, listCryptocurrencySlice } from "./states";

export default configureStore({
  reducer: {
    listCryptocurrency: listCryptocurrencySlice,
    clientsWallet: clientsWalletSlice
  }
});
