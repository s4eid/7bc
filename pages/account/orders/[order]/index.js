import React from "react";
import OrderDetailsPage from "../../../../components/AccountPage/OrderDetailsPage/OrderDetailsPage";
import Nav from "../../../../Layouts/Nav/Nav";
import Footer from "../../../../Layouts/Footer/Footer";
import DashboardS from "../../../../Layouts/Dashboard/DashboardS";

export default function OrderDetails() {
  return <OrderDetailsPage />;
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
OrderDetails.Nav = Nav;
OrderDetails.Footer = Footer;
OrderDetails.DashboardS = DashboardS;
