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

export async function getServerSideProps({ req, res }) {
  if (req.cookies.refreshToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
Register.Nav = Nav;
Register.Footer = Footer;
