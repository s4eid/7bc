import React from "react";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import RegisterPage from "../../components/RegisterPage/RegisterPage";

export default function Register() {
  return (
    <>
      <RegisterPage />
    </>
  );
}
Register.Nav = Nav;
Register.Footer = Footer;
