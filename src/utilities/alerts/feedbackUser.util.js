import { dictionary } from "@/schemas";
import Swal from "sweetalert2";

export const feedbackUser = ({
  position = "center",
  icon = "success",
  title = dictionary("successfulOperation")
}) =>
  Swal.fire({
    position,
    icon,
    title,
    showConfirmButton: false,
    timer: 2500
  });
