import React from "react";
import CarpetPage from "../../components/CarpetPage/CarpetPage.js";
import Footer from "../../Layouts/Footer/Footer.js";
import Nav from "../../Layouts/Nav/Nav.js";

export default function Carpet() {
  return (
    <>
      <CarpetPage />
    </>
  );
}

Carpet.Nav = Nav;
Carpet.Footer = Footer;
