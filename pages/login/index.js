import React from "react";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import LoginPage from "../../components/LoginPage/LoginPage";
import { getSession } from "next-auth/react";

export default function Login() {
  return (
    <>
      <LoginPage />
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
Login.Nav = Nav;
Login.Footer = Footer;
