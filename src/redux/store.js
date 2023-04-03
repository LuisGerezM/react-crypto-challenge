import { configureStore } from "@reduxjs/toolkit";
import clientsWallet from "./states/clientsWallet";

export default configureStore({
  reducer: {
    clientsWallet
  }
});
