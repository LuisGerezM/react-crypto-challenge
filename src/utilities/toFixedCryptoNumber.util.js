export const toFixedCryptoNumber = (dataToFixed, size = 3) => {
  return Number(dataToFixed && dataToFixed.toFixed(size));
};
