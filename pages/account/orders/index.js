import React from "react";
import OrdersPage from "../../../components/AccountPage/OrdersPage/OrdersPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import DashboardS from "../../../Layouts/Dashboard/DashboardS";

export default function Orders() {
  return <OrdersPage />;
}

Orders.Nav = Nav;
Orders.Footer = Footer;
Orders.DashboardS = DashboardS;
