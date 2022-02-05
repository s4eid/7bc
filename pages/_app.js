import "../styles/globals.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Footer = Component.Footer ? Component.Footer : React.Fragment;
  const Dashboard = Component.Dashboard ? Component.Dashboard : React.Fragment;
  const DashboardS = Component.DashboardS
    ? Component.DashboardS
    : React.Fragment;
  return (
    <Nav>
      <Footer>
        <Dashboard>
          <DashboardS>
            <Component {...pageProps} />
          </DashboardS>
        </Dashboard>
      </Footer>
    </Nav>
  );
}

export default MyApp;
