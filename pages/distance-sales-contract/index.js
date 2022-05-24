import React from "react";
import DistanceSCPage from "../../components/DistanceSCPage/DistanceSCPage";
import Footer from "../../Layouts/Footer/Footer";
import Nav from "../../Layouts/Nav/Nav";

export default function DistanceSC() {
  return <DistanceSCPage />;
}

DistanceSC.Nav = Nav;
DistanceSC.Footer = Footer;
