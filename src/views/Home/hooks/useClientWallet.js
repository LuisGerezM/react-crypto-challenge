import { routes } from "@/models";
import { deleteClientWallet } from "@/redux/states/clientsWallet";
import { dictionary } from "@/schemas";
import { feedbackUser, userConfirm } from "@/utilities";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useClientWallet = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const editClientWallet = walletId => {
    navigate(`${routes.CLIENT_PERSONAL_WALLET}/${walletId}`, { replace: true });
  };

  const deleteOneClientWallet = async (walletId, name) => {
    try {
      const text = `¿${dictionary("confirmDeleteClientWallet")} ${name}?`;
      const confirmAction = await userConfirm(text);

      if (!confirmAction) return;

      dispatch(deleteClientWallet(walletId));
    } catch (error) {
      console.error("Error delete one client wallet", error.message);
      feedbackUser({ icon: "error", title: dictionary("anErrorOcurred") });
    }
  };

  return { editClientWallet, deleteOneClientWallet };
};
export default useClientWallet;
