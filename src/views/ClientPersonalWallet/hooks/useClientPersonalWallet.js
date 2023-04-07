import { useFeedbackUserByAction, useFetchClientWallet } from "@/hooks";
import { routes } from "@/models";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const clientPersonalWallet = () => {
  const { clientWallet, idWallet } = useFetchClientWallet();
  useFeedbackUserByAction();

  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);
  const [whatRenderModal, setWhatRenderModal] = useState("");

  const [dataFormModal, setDataFormModal] = useState({});

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm();

  const newCrypto = idWallet =>
    navigate(`${routes.CRIPTO_LIST}/${idWallet}`, {
      replace: true,
      state: { returnTo: routes.CLIENT_PERSONAL_WALLET, clientWallet, idWallet }
    });

  const whatShowModal = modalShow => {
    setWhatRenderModal(modalShow);
  };

  const hideModal = () => {
    setWhatRenderModal("");
    reset();
    setModalShow(false);
  };

  useEffect(() => {
    if (whatRenderModal) setModalShow(true);
  }, [whatRenderModal]);

  const changeClientWalletStatus = (
    idWallet,
    cryptoCurrencySelected,
    action
  ) => {
    setDataFormModal({
      idWallet,
      cryptoCurrency: { ...cryptoCurrencySelected, typeAction: action }
    });
    setWhatRenderModal("cryptoAction");
  };

  return {
    clientWallet,
    whatShowModal,
    newCrypto,
    idWallet,
    changeClientWalletStatus,
    modalShow,
    hideModal,
    whatRenderModal,
    register,
    errors,
    handleSubmit,
    dataFormModal
  };
};
export default clientPersonalWallet;
