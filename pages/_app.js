import "../styles/globals.css";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../Redux/Store/store";
import { useApollo } from "../apolloConfig/apollo";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Footer = Component.Footer ? Component.Footer : React.Fragment;
  const Dashboard = Component.Dashboard ? Component.Dashboard : React.Fragment;
  const DashboardS = Component.DashboardS
    ? Component.DashboardS
    : React.Fragment;
  const BasketAP = Component.BasketAP ? Component.BasketAP : React.Fragment;
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Nav>
          <Footer>
            <Dashboard>
              <DashboardS>
                <BasketAP>
                  <Component {...pageProps} />
                </BasketAP>
              </DashboardS>
            </Dashboard>
          </Footer>
        </Nav>
      </Provider>
    </ApolloProvider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
