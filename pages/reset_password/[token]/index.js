import React from "react";
import { useRouter } from "next/router";
import ResetPasswordPage from "../../../components/ResetPasswordPage/ResetPasswordPage";
import Footer from "../../../Layouts/Footer/Footer";
import Nav from "../../../Layouts/Nav/Nav";
import { getSession } from "next-auth/react";

export default function ResetPassword() {
  const router = useRouter();
  const user_id = router.query.token;

  return <ResetPasswordPage user_id={user_id} />;
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

ResetPassword.Nav = Nav;
ResetPassword.Footer = Footer;
