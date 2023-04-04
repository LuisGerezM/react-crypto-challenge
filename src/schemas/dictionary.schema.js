const dictionarySchema = {
  addAmountMoney: { es: "Ingresa la cantidad de dinero..." },
  addWalletName: { es: "Ingresa el nombre de cartera..." },
  amountMoney: { es: "Cantidad de dinero" },
  assets: {
    es: "activos"
  },
  avaible: {
    es: "Disponible"
  },
  createNewWallet: {
    es: "Crear Nueva cartera"
  },
  confirmDeleteClientWallet: {
    es: "Confirma que desea eliminar cartera"
  },
  editClientWallet: {
    es: "Editar esta cartera"
  },
  deleteNameWallet: {
    es: "Eliminar esta cartera"
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
  },
  walletName: {
    es: "Nombre de la cartera"
  }
};

const dictionary = text => {
  return dictionarySchema[text].es;
};
export default dictionary;
