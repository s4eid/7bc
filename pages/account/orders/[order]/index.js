import React from "react";
import OrderDetailsPage from "../../../../components/AccountPage/OrderDetailsPage/OrderDetailsPage";
import Nav from "../../../../Layouts/Nav/Nav";
import Footer from "../../../../Layouts/Footer/Footer";
import DashboardS from "../../../../Layouts/Dashboard/DashboardS";
import { getSession } from "next-auth/react";

export default function OrderDetails() {
  return <OrderDetailsPage />;
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
OrderDetails.Nav = Nav;
OrderDetails.Footer = Footer;
OrderDetails.DashboardS = DashboardS;
