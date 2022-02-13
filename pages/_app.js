import "../styles/globals.css";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Footer = Component.Footer ? Component.Footer : React.Fragment;
  const Dashboard = Component.Dashboard ? Component.Dashboard : React.Fragment;
  const DashboardS = Component.DashboardS
    ? Component.DashboardS
    : React.Fragment;
  const BasketAP = Component.BasketAP ? Component.BasketAP : React.Fragment;
  return (
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
  );
}

export default MyApp;
