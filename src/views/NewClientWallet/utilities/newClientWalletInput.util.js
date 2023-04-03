import { dictionary } from "@/schemas";

export const newClientWalletInput = [
  {
    label: dictionary("walletName"),
    type: "text",
    name: "nameWallet",
    placeholder: dictionary("addWalletName")
  },
  {
    label: dictionary("amountMoney"),
    type: "text",
    name: "moneyAvaible",
    placeholder: dictionary("addAmountMoney")
  }
];
