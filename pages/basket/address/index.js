import React from "react";
import BasketAP from "../../../Layouts/BasketAP/BasketAP";
import AddressPage from "../../../components/BasketPage/AddressPage/AddressPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";

export default function Address() {
  return (
    <div>
      <AddressPage />
    </div>
  );
}

Address.Nav = Nav;
Address.Footer = Footer;
Address.BasketAP = BasketAP;