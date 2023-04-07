import { dictionary } from "@/schemas";
import { InputTexts, SubtitleText } from "@/styled-components";
import { CardIsLoading } from "@/views/CryptoList/components";
import { CryptoCard } from "..";
import {
  WrapList,
  WrapReference
} from "./styled-components/WrapCryptoList.styled";

const WrapCryptoList = ({
  children,
  loading,
  criptoArray,
  idWallet,
  action,
  childJustifyContent,
  childAlignItems,
  reference
}) => {
  return (
    <WrapList className='WrapList'>
      <WrapReference>
        <SubtitleText>{dictionary("references")}:</SubtitleText>
        <div className='Ref-paragraph'>
          <InputTexts>
            {reference && dictionary("muchReference")}
            {dictionary("singlereference")}
          </InputTexts>
        </div>
      </WrapReference>

      <CardIsLoading loading={loading}>
        {criptoArray?.map(cryptoCurrency => (
          <CryptoCard
            key={cryptoCurrency.id}
            crypto={cryptoCurrency}
            idWallet={idWallet}
            cryptoCurrencySelected={cryptoCurrency}
            action={action}
            childJustifyContent={childJustifyContent}
            childAlignItems={childAlignItems}
          >
            {children}
          </CryptoCard>
        ))}
      </CardIsLoading>
    </WrapList>
  );
};

export default WrapCryptoList;
