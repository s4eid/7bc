import React from "react";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import AccountPage from "../../components/AccountPage/AccountPage";

export default function Account() {
  return (
    <>
      <AccountPage />
    </>
  );
}

Account.Nav = Nav;
Account.Footer = Footer;
