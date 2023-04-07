import { routes } from "@/models";
import {
  addCryptoInClientWallet,
  addMoreOfSomeCryptoInClientWallet,
  resetStatus,
  sellCryptoInClientWallet
} from "@/redux/states/clientsWallet";
import { dictionary } from "@/schemas";
import {
  feedbackUser,
  movementFromCryptoToMoney,
  toFixedCryptoNumber,
  userConfirm
} from "@/utilities";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useActionCryptoForm = () => {
  const { success, error } = useSelector(store => store.clientsWallet);

  const {
    register,
    errors,
    handleSubmit,
    dataFormModal: { idWallet },
    moneyAvaible,
    dataFormModal,
    hideModal
  } = useFormContext();

  const [isSell] = useState(
    dataFormModal?.cryptoCurrency?.typeAction === "sell"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      const confirmAction = await userConfirm();
      if (!confirmAction) return;
      const typeAtion = dataFormModal?.cryptoCurrency?.typeAction;
      const actionDispatch = {
        buy: value => addCryptoInClientWallet(value),
        update: value => addMoreOfSomeCryptoInClientWallet(value),
        sell: value =>
          sellCryptoInClientWallet({ dataFormModal, amount: data.amountCrypto })
      };

      dispatch(
        actionDispatch[typeAtion]({ dataFormModal, amount: data.amountCrypto })
      );
    } catch (error) {
      console.error("Error action crypto form", error.message);
      feedbackUser({ icon: "error", title: dictionary("anErrorOcurred") });
    }
  };

  useEffect(() => {
    const otherOperation = async () => {
      const confirmAction = await userConfirm(
        `${dictionary("successfulOperation")}. ${dictionary("addOtherMoney")}?`
      );
      if (!confirmAction)
        navigate(`${routes.CLIENT_PERSONAL_WALLET}/${idWallet}`, {
          replace: true
        });
      else hideModal();
    };

    if (success.status) {
      dispatch(resetStatus());
      dataFormModal?.cryptoCurrency?.typeAction === "buy"
        ? otherOperation()
        : hideModal();
    }
  }, [success]);

  useEffect(() => {
    if (error.status) {
      feedbackUser({ icon: "error", title: dictionary("anErrorOcurred") });
      dispatch(resetStatus());
    }
  }, [error]);

  const textBy = dictionary(!isSell ? "buy" : "sell");
  const available = !isSell
    ? moneyAvaible
    : toFixedCryptoNumber(
        movementFromCryptoToMoney(
          dataFormModal.cryptoCurrency.amountCriptoCurrency,
          dataFormModal.cryptoCurrency.price
        )
      );

  const amountAvaible = !isSell
    ? available
    : Math.ceil(
        available +
          dataFormModal?.cryptoCurrency?.amountCriptoCurrency *
            dataFormModal?.cryptoCurrency?.price -
          dataFormModal?.cryptoCurrency?.moneyInvested
      );

  return {
    moneyAvaible,
    textBy,
    dataFormModal,
    amountAvaible,
    isSell,
    errors,
    handleSubmit,
    onSubmit,
    register
  };
};
