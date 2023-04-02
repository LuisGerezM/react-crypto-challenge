import { CustomImage } from "@/components";
import { dictionary, imagesSrc } from "@/schemas";
import { SubtitleText } from "@/styled-components";
import { HeaderClientWallet, DetailsClientWallet } from "..";
import {
  WrapClientWallet,
  WrapSectionHeaderClientWallet,
  WrapSectionDetailsClientWallet
} from "./styled-components";

const ClientWallet = ({ name, totalMoney, amountCryptos }) => {
  return (
    <WrapClientWallet className='WrapClientWallet'>
      <CustomImage
        src={imagesSrc.wallet}
        wrapImgClass='wrapImgClass col col-3 col-sm-2 col-lg-1 d-flex justify-content-center align-items-center'
      />
      <div className='col col-9 col-sm-10 col-lg-11'>
        <WrapSectionHeaderClientWallet className='WrapSectionHeaderClientWallet col col-12'>
          <HeaderClientWallet>
            {{
              src: imagesSrc.edit,
              title: "editClientWallet",
              imgClass: "col col-10 pt-1",
              buttonMargin: "me-3 me-md-4 me-lg-5",
              color: "green"
            }}
            <SubtitleText className='SubtitleText'>{name}</SubtitleText>
            {{
              src: imagesSrc.delete,
              title: "deleteNameWallet",
              imgClass: "col col-9 py-1",
              buttonMargin: "ms-3 ms-md-4 ms-lg-5",
              color: "light"
            }}
          </HeaderClientWallet>
        </WrapSectionHeaderClientWallet>
        <WrapSectionDetailsClientWallet className='WrapSectionDetailsClientWallet'>
          <DetailsClientWallet>
            {{
              text: "avaible",
              detail: `${amountCryptos} ${dictionary("assets")}`
            }}
            {{
              text: "total",
              detail: `$${totalMoney}`
            }}
          </DetailsClientWallet>
        </WrapSectionDetailsClientWallet>
      </div>
    </WrapClientWallet>
  );
};
export default ClientWallet;
