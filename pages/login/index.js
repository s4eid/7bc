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
Login.Nav = Nav;
Login.Footer = Footer;
