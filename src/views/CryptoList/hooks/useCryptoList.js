import { useFetchClientWallet } from "@/hooks/useFetchClientWallet";
import { orderArrayBy } from "@/utilities";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const useCryptoList = () => {
  const listCryptocurrency = useSelector(store => store.listCryptocurrency);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm();

  const [modalShow, setModalShow] = useState(false);
  const [dataFormModal, setDataFormModal] = useState({});

  const [loading, setLoading] = useState(true);

  const {
    clientWallet: { cryptos: refreshedCryptos, nameWallet, moneyAvaible }
  } = useFetchClientWallet();

  const navigate = useNavigate();
  const {
    state: {
      returnTo,
      clientWallet: { cryptos },
      idWallet
    }
  } = useLocation();

  const [cryptoListToRender, setCryptoListToRender] = useState(
    cryptos?.length ? cryptos : listCryptocurrency
  );

  const hideModal = () => {
    setDataFormModal({});
    reset();
    setModalShow(false);
  };

  const returnToWallet = () => {
    navigate(`${returnTo}/${idWallet}`, { replace: true });
  };

  const addCryptoInClientWallet = (idWallet, cryptoCurrency) => {
    setDataFormModal({
      idWallet,
      cryptoCurrency: { ...cryptoCurrency, typeAction: "buy" }
    });
  };

  useEffect(() => {
    if (dataFormModal.idWallet) setModalShow(true);
  }, [dataFormModal]);

  useEffect(() => {
    setLoading(true);
    if (cryptos?.length) {
      const filterCryptos = listCryptocurrency.filter(
        crypto => !cryptos.some(item => item.id === crypto.id)
      );
      setCryptoListToRender(orderArrayBy(filterCryptos, "price"));
    } else {
      setCryptoListToRender(listCryptocurrency);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    if (refreshedCryptos?.length) {
      const filterCryptos = cryptoListToRender.filter(
        crypto => !refreshedCryptos.some(item => item.id === crypto.id)
      );
      setCryptoListToRender(orderArrayBy(filterCryptos, "price"));
    }
    setLoading(false);
  }, [refreshedCryptos]);

  return {
    nameWallet,
    moneyAvaible,
    returnToWallet,
    cryptoListToRender,
    loading,
    addCryptoInClientWallet,
    idWallet,
    modalShow,
    register,
    errors,
    handleSubmit,
    dataFormModal,
    hideModal
  };
};
