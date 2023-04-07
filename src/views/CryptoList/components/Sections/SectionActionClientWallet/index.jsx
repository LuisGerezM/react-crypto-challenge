import { CustomButton, CustomImage, WrapCryptoList } from "@/components";
import { imagesSrc } from "@/schemas";

const SectionActionClientWallet = ({
  addCryptoInClientWallet,
  idWallet,
  loading,
  cryptoListToRender
}) => {
  return (
    <WrapCryptoList
      action={addCryptoInClientWallet}
      idWallet={idWallet}
      loading={loading}
      criptoArray={cryptoListToRender}
    >
      <CustomButton
        buttonClass='p-0'
        color='green'
        text={<CustomImage wrapImgClass='col col-12' src={imagesSrc.addIcon} />}
      />
    </WrapCryptoList>
  );
};
export default SectionActionClientWallet;
