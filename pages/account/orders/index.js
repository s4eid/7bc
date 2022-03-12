import React from "react";
import OrdersPage from "../../../components/AccountPage/OrdersPage/OrdersPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import DashboardS from "../../../Layouts/Dashboard/DashboardS";

export default function Orders() {
  return <OrdersPage />;
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

Orders.Nav = Nav;
Orders.Footer = Footer;
Orders.DashboardS = DashboardS;
