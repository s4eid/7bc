import React from "react";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import AccountPage from "../../components/AccountPage/AccountPage";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import { useSelector } from "react-redux";

export default function Account() {
  const { user } = useSelector((state) => state);
  return <AccountPage user={user} />;
}

export async function getServerSideProps({ req, res }) {
  if (!req.cookies.refreshToken) {
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

Account.Nav = Nav;
Account.Footer = Footer;
Account.Dashboard = Dashboard;
