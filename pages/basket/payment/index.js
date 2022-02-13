import React from "react";
import BasketAP from "../../../Layouts/BasketAP/BasketAP";
import PaymentPage from "../../../components/BasketPage/PaymentPage/PaymentPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";

export default function Payment() {
  return <PaymentPage />;
}

Payment.Nav = Nav;
Payment.Footer = Footer;
Payment.BasketAP = BasketAP;
