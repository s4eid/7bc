import React from "react";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import AccountPage from "../../components/AccountPage/AccountPage";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import Loading from "../../Layouts/Loading";
import { useSelector } from "react-redux";
import { getSession } from "next-auth/react";

export default function Account() {
  const { user } = useSelector((state) => state);
  console.log(user.loading);
  return <>{!user.loading ? <AccountPage user={user} /> : <Loading />}</>;
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  if (!req.cookies.refreshToken && !session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

Account.Nav = Nav;
Account.Footer = Footer;
Account.Dashboard = Dashboard;
