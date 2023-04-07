import { useFeedbackUserByAction } from "@/hooks";
import { deleteTransaction } from "@/redux/states/clientsWallet";
import { dictionary } from "@/schemas";
import { feedbackUser, userConfirm } from "@/utilities";
import { useDispatch } from "react-redux";

const accordionTransactionSchema = {
  buy: "Compras",
  sell: "Ventas",
  update: "Actualizaciones"
};

const useModalShowtransaction = () => {
  useFeedbackUserByAction();

  const dispatch = useDispatch();

  const handleDeleteTransaction = async (id, type, clientWallet, name) => {
    try {
      const text = `Confirma que desea eliminar esta transaccion de tipo "${
        accordionTransactionSchema[`${type}`]
      }" en criptomoneda "${name}"`;

      const confirmAction = await userConfirm(text);
      if (!confirmAction) return;

      dispatch(deleteTransaction({ id, type, clientWallet }));
    } catch (error) {
      console.error("Error use modal show transaction", error.message);
      feedbackUser({ icon: "error", title: dictionary("anErrorOcurred") });
    }
  };

  return { accordionTransactionSchema, handleDeleteTransaction };
};
export default useModalShowtransaction;
