import {
  ActionCryptoForm,
  AlertMsg,
  Card,
  CustomButton,
  CustomImage,
  CustomModal,
  WrapCryptoList
} from "@/components";
import { dictionary } from "@/schemas";
import { SubtitleText, TitleText } from "@/styled-components";
import { FormProvider } from "react-hook-form";
import ModalShowEditWallet from "./components/ModalShowEditWallet";
import ModalShowTansactions from "./components/ModalShowTansactions";
import { useClientPersonalWallet } from "./hooks";
import {
  ActionsClientPersonalWallet,
  SectionBottomClientPersonalWallet,
  SectionTopClientPersonalWallet,
  WrapClientPersonalWallet
} from "./styled-components";

const ClientPersonalWallet = () => {
  const {
    clientWallet,
    whatShowModal,
    newCrypto,
    idWallet,
    changeClientWalletStatus,
    modalShow,
    hideModal,
    whatRenderModal,
    register,
    errors,
    handleSubmit,
    dataFormModal
  } = useClientPersonalWallet();

  return (
    <WrapClientPersonalWallet className='WrapClientPersonalWallet'>
      <SectionTopClientPersonalWallet>
        <Card cardClass='col col-12 col-md-7' borderColor='lightgray'>
          <div className='d-flex justify-content-between'>
            <div>
              <TitleText>{clientWallet.nameWallet}</TitleText>
              <SubtitleText className='text-center text-sm-start my-2'>
                {dictionary("avaible")}: ${clientWallet.moneyAvaible}
              </SubtitleText>
              <SubtitleText className='text-center text-sm-start'>
                {dictionary("totalMoney")}: ${clientWallet.totalMoney}
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
          <CustomButton
            text={dictionary("transactions")}
            onClick={() => whatShowModal("transactions")}
            buttonClass='col col-5 col-sm-5 col-md-6 col-lg-5'
            color='yellow'
          />
        </ActionsClientPersonalWallet>
      </SectionTopClientPersonalWallet>
      <SectionBottomClientPersonalWallet clasName='SectionBottomClientPersonalWallet'>
        {clientWallet?.cryptos?.length ? (
          <WrapCryptoList
            action={changeClientWalletStatus}
            idWallet={idWallet}
            criptoArray={clientWallet.cryptos}
            childJustifyContent='space-between'
            reference='all'
          >
            <CustomButton
              buttonClass='col col col-12 col-sm-10 col-lg-6'
              text={dictionary("buy")}
              color='light'
              param='update'
            />
            <CustomButton
              buttonClass='col col col-12 col-sm-10 col-lg-5 mt-1 mt-lg-0'
              text={dictionary("sell")}
              color='red'
              param='sell'
            />
          </WrapCryptoList>
        ) : (
          <AlertMsg text={dictionary("noCryptos")} />
        )}
      </SectionBottomClientPersonalWallet>

      <CustomModal show={modalShow} onHide={hideModal}>
        {whatRenderModal === "transactions" && (
          <ModalShowTansactions clientWallet={clientWallet} />
        )}
        {whatRenderModal === "editWallet" && (
          <ModalShowEditWallet clientWallet={clientWallet} />
        )}
        {whatRenderModal === "cryptoAction" && (
          <FormProvider
            {...{
              register,
              errors,
              handleSubmit,
              moneyAvaible: clientWallet.moneyAvaible,
              dataFormModal,
              hideModal
            }}
          >
            <ActionCryptoForm />
          </FormProvider>
        )}
      </CustomModal>
    </WrapClientPersonalWallet>
  );
};

export default ClientPersonalWallet;
