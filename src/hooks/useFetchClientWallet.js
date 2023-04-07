import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useFetchClientWallet = () => {
  const { id: idWallet } = useParams();

  const { clientsWallet, success, error } = useSelector(
    store => store.clientsWallet
  );
  const [clientWallet, setClientWallet] = useState({});

  useEffect(() => {
    if (idWallet && clientsWallet.length) {
      const dataClientWallet = clientsWallet.find(
        wallet => wallet.id === idWallet
      );

      setClientWallet(dataClientWallet);
    }
  }, [idWallet, clientsWallet]);

  return { clientWallet, idWallet, success, error };
};
