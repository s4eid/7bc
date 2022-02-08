import React from "react";
import BasketPage from "../../components/BasketPage/BasketPage";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";

export default function Basket() {
  return <BasketPage />;
}

Basket.Nav = Nav;
Basket.Footer = Footer;
