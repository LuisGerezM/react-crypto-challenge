import { AlertMsg, Card, CustomButton } from "@/components";
import { dictionary } from "@/schemas";
import { stateInvestCompanyMock } from "@/STATE_GLOBAL/satate-mock";
import { CustomContentSection } from "@/styled-components";
import { ClientWallet } from "./components";
import { SectionAddClientWallet, WrapHome } from "./styled-components";

const Home = () => {
  return (
    <WrapHome>
      <SectionAddClientWallet className='col col-12'>
        <CustomButton color='default' text={dictionary("newClientWallet")} />
      </SectionAddClientWallet>

      <CustomContentSection className='CustomContentSection col col-12'>
        {!stateInvestCompanyMock.length ? (
          <AlertMsg text={dictionary("noWallet")} />
        ) : (
          <div className='col col-12'>
            {stateInvestCompanyMock.map(wallet => (
              <Card key={wallet.id}>
                <ClientWallet
                  name={wallet.name}
                  totalMoney={wallet.totalMoney}
                  amountCryptos={wallet.cryptos.length}
                />
              </Card>
            ))}
          </div>
        )}
      </CustomContentSection>
    </WrapHome>
  );
};

export default Home;
