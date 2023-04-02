const dictionarySchema = {
  assets: {
    es: "activos"
  },
  avaible: {
    es: "Disponible"
  },
  editClientWallet: {
    es: "Editar esta billetera"
  },
  deleteNameWallet: {
    es: "Eliminar esta billetera"
  },
  errorBunderyText: {
    es: "Ups... Parece que algo salió mal! Comunicate con el administrador por favor. Serás redirigido a la pantalla principal"
  },
  investmentComp: {
    es: "Investment Company"
  },
  newClientWallet: {
    es: "Nueva cartera"
  },
  noWallet: {
    es: "No existen carteras"
  },
  total: {
    es: "Total"
  }
};

const dictionary = text => {
  return dictionarySchema[text].es;
};
export default dictionary;
