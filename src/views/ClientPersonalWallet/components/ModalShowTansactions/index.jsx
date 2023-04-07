import { Card, CustomButtonAndImage } from "@/components";
import { dictionary, imagesSrc } from "@/schemas";
import { InputTexts, SubtitleText } from "@/styled-components";
import { handlerDates, toFixedCryptoNumber } from "@/utilities";
import { Accordion } from "react-bootstrap";
import { useModalShowtransaction } from "../../hooks";

const ModalShowTansactions = ({ clientWallet }) => {
  const { accordionTransactionSchema, handleDeleteTransaction } =
    useModalShowtransaction();

  return (
    <Accordion className='p-3'>
      {Object.keys(clientWallet.transactions).map((typeTransaction, idx) => (
        <Accordion.Item eventKey={idx} key={idx}>
          <Accordion.Header>
            <SubtitleText>
              {accordionTransactionSchema[typeTransaction]}
            </SubtitleText>
          </Accordion.Header>
          <Accordion.Body>
            {clientWallet.transactions[typeTransaction].map(transaction => (
              <Card
                key={transaction.id}
                cardClass='d-flex flex-wrap flex-row flex-lg-column justify-content-center align-items-center px-3 mb-4'
              >
                <div className='col col-6 col-lg-12 d-flex flex-column flex-lg-row justify-content-center align-items-center'>
                  <div className='col col-12 col-lg-3'>
                    <SubtitleText className='text-center'>Fecha:</SubtitleText>
                    <InputTexts className='text-center'>
                      {handlerDates.toLocaleString(transaction.date)}
                    </InputTexts>
                  </div>
                  <div className='col col-12 col-lg-4'>
                    <SubtitleText className='text-center'>
                      {dictionary("crypto")}:
                    </SubtitleText>
                    <InputTexts className='text-center'>
                      {transaction.name}
                    </InputTexts>
                  </div>
                  <div className='col col-12 col-lg-4'>
                    <SubtitleText className='text-center'>
                      {dictionary("money")}:
                    </SubtitleText>
                    <InputTexts className='text-center'>
                      ${transaction.moneyInvested}
                    </InputTexts>
                  </div>
                </div>

                <div className='col col-6 col-lg-12 d-flex flex-column  flex-lg-row justify-content-start align-items-center mt-0 mt-lg-3'>
                  <div className='col col-12 col-lg-6'>
                    <SubtitleText className='text-center'>
                      {dictionary("cryptoPrice")}:
                    </SubtitleText>
                    <InputTexts className='text-center'>
                      {transaction.price}
                    </InputTexts>
                  </div>
                  <div className='col col-12 col-lg-6'>
                    <SubtitleText className='text-center'>
                      {dictionary("amountCrypto")}:
                    </SubtitleText>
                    <InputTexts className='text-center'>
                      {toFixedCryptoNumber(transaction.amountCrypto, 10)}
                    </InputTexts>
                  </div>
                </div>
                <CustomButtonAndImage
                  onClick={() =>
                    handleDeleteTransaction(
                      transaction.id,
                      typeTransaction,
                      clientWallet,
                      transaction.name
                    )
                  }
                  color='light'
                  title='deleteTransaction'
                  imgClass='col col-9 py-1'
                  src={imagesSrc.delete}
                />
              </Card>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ModalShowTansactions;
