import React from "react";
import ContactPage from "../../components/ContactPage/ContactPage";
import Footer from "../../Layouts/Footer/Footer";
import Nav from "../../Layouts/Nav/Nav";

export default function Contact() {
  return <ContactPage />;
}

Contact.Nav = Nav;
Contact.Footer = Footer;
