import React from "react";
import OrdersPage from "../../../components/AccountPage/OrdersPage/OrdersPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { initializeApollo } from "../../../apolloConfig/apollo";
import { GET_ORDERS } from "../../../graphql_f/order/Query/getOrders";
import { useSelector } from "react-redux";
import Loading from "../../../Layouts/Loading";
import { useQuery } from "@apollo/client";
import DashboardS from "../../../Layouts/Dashboard/DashboardS";
import { getSession } from "next-auth/react";
import { getUser_server } from "../../../Functions/userC";

export default function Orders() {
  const user = useSelector((d) => d.user);

  const { data, error, loading } = useQuery(GET_ORDERS, {
    variables: {
      userId: user.user_id,
    },
    skip: !user.user_id,
  });

  return (
    <>{!loading ? <OrdersPage _orders={data?.getOrders} /> : <Loading />}</>
  );
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
  const token = req.cookies.refreshToken;
  const user = await getUser_server(token, session?.user);
  const client = await initializeApollo();
  await client.query({
    query: GET_ORDERS,
    variables: {
      userId: user.user_id,
    },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

Orders.Nav = Nav;
Orders.Footer = Footer;
Orders.DashboardS = DashboardS;
