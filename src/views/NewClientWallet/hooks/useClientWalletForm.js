import { routes } from "@/models";
import { addClientWallet } from "@/redux/states";
import { feedbackUser, userConfirm } from "@/utilities";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useClientWalletForm = () => {
  const { clientsWallet } = useSelector(store => store.clientsWallet);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const cancelNewClientWallet = () => {
    navigate(routes.HOME, { replace: true });
  };

  const onSubmit = async data => {
    const confirmAction = await userConfirm();

    if (!confirmAction) return;

    dispatch(addClientWallet(data));

    feedbackUser();
    navigate(routes.HOME, { replace: true });
  };

  return {
    register,
    clientsWallet,
    errors,
    handleSubmit,
    onSubmit,
    cancelNewClientWallet
  };
};
export default useClientWalletForm;
