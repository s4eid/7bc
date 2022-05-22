import React from "react";
import OrderDetailsPage from "../../../../components/AccountPage/OrderDetailsPage/OrderDetailsPage";
import Nav from "../../../../Layouts/Nav/Nav";
import Footer from "../../../../Layouts/Footer/Footer";
import DashboardS from "../../../../Layouts/Dashboard/DashboardS";
import { initializeApollo } from "../../../../apolloConfig/apollo";
import { useQuery } from "@apollo/client";
import { getSession } from "next-auth/react";
import { GET_ORDER } from "../../../../graphql_f/order/Query/getOrder";
import { useRouter } from "next/router";
import Loading from "../../../../Layouts/Loading";

export default function OrderDetails() {
  const router = useRouter();
  const order_id = router.query;
  const { data, error, loading } = useQuery(GET_ORDER, {
    variables: {
      orderId: order_id.order,
    },
    fetchPolicy: "network-only",
  });
  return (
    <>{!loading ? <OrderDetailsPage order={data.getOrder} /> : <Loading />}</>
  );
}

export async function getServerSideProps({ req, res, query }) {
  const session = await getSession({ req });
  if (!req.cookies.refreshToken && !session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  // const order_id = query.order;
  // const client = initializeApollo();
  // await client.query({
  //   query: GET_ORDER,
  //   variables: {
  //     orderId: order_id,
  //   },
  //   context: {
  //     headers: {
  //       Cookie: req.headers.cookie,
  //     },
  //   },
  // });
  return {
    props: {
      // initialApolloState: client.cache.extract(),
    },
  };
}
OrderDetails.Nav = Nav;
OrderDetails.Footer = Footer;
OrderDetails.DashboardS = DashboardS;
