import { themeColors } from "@/styled-components";
import Swal from "sweetalert2";

export const userConfirm = text => {
  return Swal.fire({
    title: text || "Confirmar acción",
    showCancelButton: true,
    cancelButtonColor: themeColors.red,
    cancelButtonText: "Cancelar",
    confirmButtonText: "Confirmar",
    confirmButtonColor: themeColors.blue,
    icon: "question"
  }).then(result => {
    if (result.isConfirmed) return true;
  });
};
