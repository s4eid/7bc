import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Footer = Component.Footer ? Component.Footer : React.Fragment;
  return (
    <Nav>
      <Footer>
        <Component {...pageProps} />
      </Footer>
    </Nav>
  );
}

export default MyApp;
