import React from "react";
import OrderDetailsPage from "../../../../components/AccountPage/OrderDetailsPage/OrderDetailsPage";
import Nav from "../../../../Layouts/Nav/Nav";
import Footer from "../../../../Layouts/Footer/Footer";
import DashboardS from "../../../../Layouts/Dashboard/DashboardS";

export default function OrderDetails() {
  return <OrderDetailsPage />;
}

OrderDetails.Nav = Nav;
OrderDetails.Footer = Footer;
OrderDetails.DashboardS = DashboardS;
