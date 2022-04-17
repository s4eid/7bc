import React from "react";
import OrdersPage from "../../../components/AccountPage/OrdersPage/OrdersPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import DashboardS from "../../../Layouts/Dashboard/DashboardS";
import { getSession } from "next-auth/react";

export default function Orders() {
  return <OrdersPage />;
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

Orders.Nav = Nav;
Orders.Footer = Footer;
Orders.DashboardS = DashboardS;
