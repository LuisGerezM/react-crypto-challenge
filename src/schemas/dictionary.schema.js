const dictionarySchema = {
  addAmountMoney: { es: "Ingresa la cantidad de dinero..." },
  addCryptoCurrency: { es: "Nueva cripto" },
  addOtherMoney: { es: "Agregar otra moneda" },
  addWalletName: { es: "Ingresa el nombre de cartera..." },
  amountAvaible: { es: "Cantidad disponible" },
  amountCrypto: { es: "Cantidad cripto" },
  amountMoney: { es: "Cantidad de dinero" },
  amountToBuy: { es: "Cantidad a comprar" },
  amountToSell: { es: "Cantidad a vender" },
  anErrorOcurred: { es: "Ocurrió un error. comunicate con el administrador" },
  assets: {
    es: "activos"
  },
  avaible: {
    es: "Disponible"
  },
  buy: {
    es: "Comprar "
  },
  buyCancel: {
    es: "Cancelar compra"
  },
  close: {
    es: "Cerrar"
  },
  createNewWallet: {
    es: "Crear Nueva cartera"
  },
  crypto: {
    es: "Cripto"
  },
  cryptoPrice: {
    es: "Precio cripto"
  },
  confirmDeleteClientWallet: {
    es: "Confirma que desea eliminar cartera"
  },
  date: {
    es: "Fecha"
  },
  deleteTransaction: {
    es: "Eliminar transaccion"
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
  money: {
    es: "Dinero"
  },
  muchReference: {
    es: "INV: Dinero invertido; AMNT: Cantidad cripto comprada; QP: Cantidad generada; "
  },
  newClientWallet: {
    es: "Nueva cartera"
  },
  noWallet: {
    es: "Aún no existen carteras"
  },
  noCryptos: {
    es: "Aún no existen criptomonedas"
  },
  references: {
    es: "Referencias "
  },
  sell: {
    es: "Vender "
  },
  singlereference: {
    es: " PRC: Precio actual de la moneda;"
  },
  successfulOperation: {
    es: "Operación exitosa"
  },
  total: {
    es: "Total"
  },
  totalMoney: {
    es: "Dinero Total"
  },
  transactions: {
    es: "Transacciones"
  },
  walletName: {
    es: "Nombre de la cartera"
  }
};

const dictionary = text => {
  return dictionarySchema[text].es;
};
export default dictionary;
