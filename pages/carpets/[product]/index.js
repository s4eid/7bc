import React from "react";
import ProductPage from "../../../components/ProductPage/ProductPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";

export default function Product() {
  return (
    <>
      <ProductPage />
    </>
  );
}

Product.Nav = Nav;
Product.Footer = Footer;
