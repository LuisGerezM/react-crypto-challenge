import { useFeedbackUserByAction } from "@/hooks";
import { editNameAndMoneyClientWallet } from "@/redux/states/clientsWallet";
import { dictionary } from "@/schemas";
import { feedbackUser, userConfirm } from "@/utilities";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const useModalShowEditWallet = clientWallet => {
  const dispatch = useDispatch();
  useFeedbackUserByAction();
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors }
  } = useForm({
    defaultValues: {
      nameWallet: clientWallet.nameWallet
    }
  });

  const onSubmit = async data => {
    try {
      const confirmAction = await userConfirm();

      if (!confirmAction) return;

      dispatch(editNameAndMoneyClientWallet({ data, clientWallet }));
      resetField("moneyAvaible");
    } catch (error) {
      console.error("Error use modal show edit wallet", error.message);
      feedbackUser({ icon: "error", title: dictionary("anErrorOcurred") });
    }
  };

  return { register, errors, handleSubmit, onSubmit };
};
export default useModalShowEditWallet;
