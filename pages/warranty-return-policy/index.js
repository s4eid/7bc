import React from "react";
import WarrantyPage from "../../components/WarrantyPage/WarrantyPage";
import Footer from "../../Layouts/Footer/Footer";
import Nav from "../../Layouts/Nav/Nav";

export default function Warranty() {
  return <WarrantyPage />;
}

Warranty.Nav = Nav;
Warranty.Footer = Footer;
