import React from "react";
import ChangePasswordPage from "../../components/ChangePasswordPage/ChangePasswordPage";
import Footer from "../../Layouts/Footer/Footer";
import Nav from "../../Layouts/Nav/Nav";
import { getSession } from "next-auth/react";

export default function ChangePassword() {
  return <ChangePasswordPage />;
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
ChangePassword.Nav = Nav;
ChangePassword.Footer = Footer;
