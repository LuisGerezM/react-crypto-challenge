import { useCryptoCard } from "@/hooks";
import { limitString } from "@/utilities/limitString.util";
import { Children, cloneElement } from "react";
import { Card, CustomImage } from "..";
import ReferenceParagraphs from "./components/ReferenceParagraphs";
import {
  WrapChildrenCryptoCard,
  WrapCryptoCard,
  WrapNameAndIconCrypto,
  WrapNameAndSymbol,
  WrapPriceAndPercentCrypto,
  WrapStatusPercent
} from "./styled-components";

const CryptoCard = ({
  crypto,
  action,
  idWallet,
  cryptoCurrencySelected,
  children,
  childJustifyContent,
  childAlignItems
}) => {
  const { sourceByPercent, convertNegativeNum } = useCryptoCard();

  children = Children.map(children, child =>
    cloneElement(child, {
      onClick: () => action(idWallet, cryptoCurrencySelected, child.props.param)
    })
  );

  return (
    <Card minHeight='100px'>
      <WrapCryptoCard className='d-flex'>
        <WrapNameAndIconCrypto className='WrapNameAndIconCrypto col col-5'>
          <CustomImage wrapImgClass='col col-4 col-md-2' src={crypto.image} />
          <WrapNameAndSymbol className='WrapNameAndSymbol col col-8'>
            <div>{limitString(crypto.name)}</div>
            <div>{crypto.symbol}</div>
          </WrapNameAndSymbol>
        </WrapNameAndIconCrypto>
        <WrapPriceAndPercentCrypto className='WrapPriceAndPercentCrypto col col-4'>
          <div className='col col-12 col-sm-7 col-lg-5'>
            {crypto.moneyInvested && <ReferenceParagraphs crypto={crypto} />}
            <b>PRC: </b> ${crypto.price}
          </div>
          <WrapStatusPercent className='WrapStatusPercent col col-4'>
            <CustomImage
              wrapImgClass='col col-6 col-sm-5 col-lg-3'
              src={sourceByPercent(crypto.percent)}
            />
            <div>{convertNegativeNum(crypto.percent)}%</div>
          </WrapStatusPercent>
        </WrapPriceAndPercentCrypto>
        <WrapChildrenCryptoCard
          className='col col-3'
          justifyContent={childJustifyContent}
          alignItems={childAlignItems}
        >
          {children}
        </WrapChildrenCryptoCard>
      </WrapCryptoCard>
    </Card>
  );
};
export default CryptoCard;
