import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findInArrayBy } from "@/utilities";

export const useFetchClientWallet = () => {
  const { id: idWallet } = useParams();

  const listCryptocurrencySlice = useSelector(
    store => store.listCryptocurrency
  );

  const { clientsWallet, success, error } = useSelector(
    store => store.clientsWallet
  );
  const [clientWallet, setClientWallet] = useState({});

  useEffect(() => {
    if (idWallet && clientsWallet.length) {
      const dataClientWallet = clientsWallet.find(
        wallet => wallet.id === idWallet
      );

      const cryptos = dataClientWallet.cryptos.map(crypto => ({
        ...crypto,
        price: findInArrayBy(listCryptocurrencySlice, "id", crypto.id).price
      }));

      const updateDateClientWallet = { ...dataClientWallet, cryptos };

      setClientWallet(updateDateClientWallet);
    }
  }, [idWallet, clientsWallet, listCryptocurrencySlice]);

  return { clientWallet, idWallet, success, error };
};
