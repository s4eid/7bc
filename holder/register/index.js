import React from "react";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import RegisterPage from "../../components/RegisterPage/RegisterPage";
import { getSession } from "next-auth/react";

export default function Register() {
  return (
    <>
      <RegisterPage />
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  if (req.cookies.refreshToken || session) {
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
