import { imagesSrc } from "@/schemas";

export const useCryptoCard = () => {
  const windowSize = window.innerWidth;

  const sourceByPercent = percent =>
    percent > 0 ? imagesSrc.arrowRight : imagesSrc.arrowLeftBottom;

  const convertNegativeNum = num => (num >= 0 ? num : Math.abs(num));

  const sliceName = (str, length = 7) =>
    str.length > length ? str.slice(0, length).concat("...") : str;

  return {
    sourceByPercent,
    convertNegativeNum,
    sliceName,
    windowSize
  };
};
