import { routes } from "@/models";
import { addClientWallet } from "@/redux/states/clientsWallet";
import { dictionary } from "@/schemas";
import { feedbackUser, userConfirm } from "@/utilities";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useClientWalletForm = () => {
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
    try {
      const confirmAction = await userConfirm();

      if (!confirmAction) return;

      dispatch(addClientWallet(data));

      feedbackUser();
      navigate(routes.HOME, { replace: true });
    } catch (error) {
      console.error("Error use client wallet form", error.message);
      feedbackUser({ icon: "error", title: dictionary("anErrorOcurred") });
    }
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    cancelNewClientWallet
  };
};
export default useClientWalletForm;
