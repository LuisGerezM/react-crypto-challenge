import { AlertMsg, Card, CustomButton } from "@/components";
import { routes } from "@/models";
import { dictionary } from "@/schemas";
import { CustomContentSection } from "@/styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClientWallet } from "./components";
import { SectionAddClientWallet, WrapHome } from "./styled-components";

const Home = () => {
  const { clientsWallet } = useSelector(store => store.clientsWallet);
  const navigate = useNavigate();
  const newWallet = () => navigate(routes.NEW_CLIENT_WALLET, { replace: true });

  return (
    <WrapHome>
      <SectionAddClientWallet className='col col-12'>
        <CustomButton
          color='default'
          text={dictionary("newClientWallet")}
          onClick={newWallet}
        />
      </SectionAddClientWallet>

      <CustomContentSection className='CustomContentSection col col-12'>
        {!clientsWallet.length ? (
          <AlertMsg text={dictionary("noWallet")} />
        ) : (
          <div className='col col-12'>
            {clientsWallet.map(wallet => (
              <Card key={wallet.id}>
                <ClientWallet
                  id={wallet.id}
                  name={wallet.nameWallet}
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
