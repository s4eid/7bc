import React from "react";
import AboutPage from "../../components/AboutPage/AboutPage";
import Footer from "../../Layouts/Footer/Footer";
import Nav from "../../Layouts/Nav/Nav";

export default function About() {
  return <AboutPage />;
}
About.Nav = Nav;
About.Footer = Footer;
