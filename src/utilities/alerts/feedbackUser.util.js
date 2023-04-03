import Swal from "sweetalert2";

export const feedbackUser = (
  position = "center",
  icon = "success",
  title = "Operación exitosa"
) =>
  Swal.fire({
    position,
    icon,
    title,
    showConfirmButton: false,
    timer: 2500
  });
