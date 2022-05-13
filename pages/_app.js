import "../styles/globals.css";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import Router from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { createWrapper } from "next-redux-wrapper";
import store from "../Redux/Store/store";
import { useApollo } from "../apolloConfig/apollo";
import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";
import { useSelector, useDispatch } from "react-redux";
import { addError } from "../Redux/Actions/Error/error";
import Error from "next/error";
NProgress.configure({ showSpinner: false });

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Footer = Component.Footer ? Component.Footer : React.Fragment;
  const Dashboard = Component.Dashboard ? Component.Dashboard : React.Fragment;
  const DashboardS = Component.DashboardS
    ? Component.DashboardS
    : React.Fragment;
  const BasketAP = Component.BasketAP ? Component.BasketAP : React.Fragment;
  const dispatch = useDispatch();
  const error = useSelector((data) => data.error);
  Router.events.on("routeChangeStart", (uri) => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (uri) => {
    // console.log(!!error.status);
    // if (error.has) {
    //   dispatch(addError(null, false));
    // }
    NProgress.done();
  });
  console.log(error);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <SessionProvider session={pageProps.session}>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            {/* {error.has ? (
              <Error statusCode={error.status} />
            ) : ( */}
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
            {/* )} */}
          </Provider>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(App);
