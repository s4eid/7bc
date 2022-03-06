import React from "react";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import LoginPage from "../../components/LoginPage/LoginPage";

export default function Login() {
  return (
    <>
      <LoginPage />
    </>
  );
}
Login.Nav = Nav;
Login.Footer = Footer;
