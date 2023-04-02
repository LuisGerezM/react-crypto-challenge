import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ComponentErrorView, CustomImage, Navbar } from "./components";
import { routes } from "./models";
import { RoutesNoMatch } from "./routes";
import { dictionary, imagesSrc } from "./schemas";
import { CustomContainer, GlobalStyle } from "./styled-components";
import { ErrorBoundary } from "./utilities";
import { ClientPersonalWallet, CryptoList, Home } from "./views";

export const App = () => {
  const [returnToHome, setReturnToHome] = useState(false);

  return (
    <BrowserRouter>
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
          <RoutesNoMatch>
            <Route path={routes.HOME} element={<Home />} />
            <Route
              path={routes.CLIENT_PERSONAL_WALLET}
              element={<ClientPersonalWallet />}
            />
            <Route path={routes.CRIPTO_LIST} element={<CryptoList />} />
          </RoutesNoMatch>
        </CustomContainer>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
