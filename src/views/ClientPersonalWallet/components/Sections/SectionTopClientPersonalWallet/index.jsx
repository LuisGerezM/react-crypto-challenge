import { Card, CustomButton, CustomImage } from "@/components";
import { dictionary } from "@/schemas";
import { SubtitleText, TitleText } from "@/styled-components";
import { toFixedCryptoNumber } from "@/utilities";
import {
  ActionsClientPersonalWallet,
  SectionTopClientPersonalWallet
} from "@/views/ClientPersonalWallet/styled-components";

const TopClientPersonalWallet = ({
  clientWallet,
  whatShowModal,
  newCrypto,
  idWallet
}) => {
  const btnDisabled =
    clientWallet.transactions &&
    Object.keys(clientWallet.transactions).length > 0;

  return (
    <SectionTopClientPersonalWallet>
      <Card cardClass='col col-12 col-md-7' borderColor='lightgray'>
        <div className='d-flex justify-content-between'>
          <div>
            <TitleText>{clientWallet.nameWallet}</TitleText>
            <SubtitleText className='text-center text-sm-start my-2'>
              {dictionary("avaible")}: ${clientWallet.moneyAvaible}
            </SubtitleText>
            <SubtitleText className='text-center text-sm-start'>
              {dictionary("totalMoney")}: $
              {toFixedCryptoNumber(clientWallet.totalMoney, 8)}
            </SubtitleText>
          </div>
          <div>
            <CustomButton
              buttonClass='p-0'
              onClick={() => whatShowModal("editWallet")}
              color='green'
              text={
                <CustomImage
                  src='/assets/icons/edit-46.webp'
                  imgWidth='75%'
                  title='Editar nombre y dinero de la cartera'
                />
              }
            />
          </div>
        </div>
      </Card>

      <ActionsClientPersonalWallet className='SectionAddCryptoCurrency col col-12 col-md-5'>
        <CustomButton
          color='default'
          text={dictionary("addCryptoCurrency")}
          onClick={() => newCrypto(idWallet)}
          buttonClass='col col-5 col-sm-5 col-md-5 me-md-1 me-lg-5'
        />

        {btnDisabled && (
          <CustomButton
            text={dictionary("transactions")}
            onClick={() => whatShowModal("transactions")}
            buttonClass='col col-5 col-sm-5 col-md-6 col-lg-5'
            color='yellow'
          />
        )}
      </ActionsClientPersonalWallet>
    </SectionTopClientPersonalWallet>
  );
};
export default TopClientPersonalWallet;
