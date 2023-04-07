import { lazy, Suspense, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import {
  BackToHome,
  ComponentErrorView,
  CustomImage,
  Navbar,
  SpinnerLoad
} from "./components";
import { usePersistenceListCrypto } from "./hooks";
import { routes } from "./models";
import { RoutesNoMatch } from "./routes";
import { dictionary, imagesSrc } from "./schemas";
import { CustomContainer, GlobalStyle } from "./styled-components";
import { ErrorBoundary } from "./utilities";

const ClientPersonalWallet = lazy(() => import("./views/ClientPersonalWallet"));
const CryptoList = lazy(() => import("./views/CryptoList"));
const Home = lazy(() => import("./views/Home"));
const NewClientWallet = lazy(() => import("./views/NewClientWallet"));

export const App = () => {
  const [returnToHome, setReturnToHome] = useState(false);
  const { pathname } = useLocation();

  usePersistenceListCrypto();

  return (
    <>
      <GlobalStyle />
      <ErrorBoundary
        returnToHome={returnToHome}
        fallbackComponent={
          <ComponentErrorView
            setReturnToHome={setReturnToHome}
            text={dictionary("errorBunderyText")}
            where='error-boundary'
          >
            <CustomImage
              src={imagesSrc.error500}
              width='75%'
              alt='error 500 img'
              title='error 500 img'
            />
          </ComponentErrorView>
        }
      >
        <Navbar />
        <CustomContainer className='Container'>
          {pathname !== "/" && <BackToHome />}
          <Suspense fallback={<SpinnerLoad />}>
            <RoutesNoMatch>
              <Route path={routes.HOME} element={<Home />} />
              <Route
                path={`${routes.CLIENT_PERSONAL_WALLET}/:id`}
                element={<ClientPersonalWallet />}
              />
              <Route
                path={`${routes.CRIPTO_LIST}/:id`}
                element={<CryptoList />}
              />
              <Route
                path={routes.NEW_CLIENT_WALLET}
                element={<NewClientWallet />}
              />
            </RoutesNoMatch>
          </Suspense>
        </CustomContainer>
      </ErrorBoundary>
    </>
  );
};
