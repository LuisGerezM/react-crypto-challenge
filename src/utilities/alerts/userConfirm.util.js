import Swal from "sweetalert2";

export const userConfirm = text => {
  return Swal.fire({
    title: text || "Confirmar acción",
    showCancelButton: true,
    cancelButtonColor: "#FF0000",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#0038FF",
    icon: "question"
  }).then(result => {
    if (result.isConfirmed) return true;
  });
};
