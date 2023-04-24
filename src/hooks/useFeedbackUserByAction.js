import { resetStatus } from "@/redux/states/clientsWallet";
import { dictionary } from "@/schemas";
import { feedbackUser } from "@/utilities";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchClientWallet } from "./useFetchClientWallet";

export const useFeedbackUserByAction = () => {
  const { success, error } = useFetchClientWallet();
  const dispatch = useDispatch();

  useEffect(() => {
    if (success.status) {
      dispatch(resetStatus());
      feedbackUser({});
    }
  }, [success]);

  useEffect(() => {
    if (error.status) {
      dispatch(resetStatus());
      feedbackUser({ icon: "error", title: dictionary("anErrorOcurred") });
    }
  }, [error]);
};
