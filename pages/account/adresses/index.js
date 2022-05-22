import React from "react";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { useQuery } from "@apollo/client";
import AddressesPage from "../../../components/AccountPage/AddressesPage/AddressesPage";
import { initializeApollo } from "../../../apolloConfig/apollo";
import Loading from "../../../Layouts/Loading";
import { GET_USER_ADDRESS } from "../../../graphql_f/users/Query/getUserAddress";
import { getSession } from "next-auth/react";
import { getUser_server } from "../../../Functions/userC";
import DashboardS from "../../../Layouts/Dashboard/DashboardS";
import { useSelector } from "react-redux";

export default function Addresses() {
  const user = useSelector((d) => d.user);

  const { data, error, loading } = useQuery(GET_USER_ADDRESS, {
    variables: {
      user_id: user.user_id,
    },
    skip: !user.user_id,
    fetchPolicy: "network-only",
  });
  return (
    <>
      {!loading && !user.loading ? (
        <AddressesPage userAddress={data.getUserAddress} />
      ) : (
        <Loading />
      )}
    </>
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
  // const token = req.cookies.refreshToken;
  // const user = await getUser_server(token, session?.user);
  // const client = await initializeApollo();
  // await client.query({
  //   query: GET_USER_ADDRESS,
  //   variables: {
  //     user_id: user.user_id,
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

Addresses.Nav = Nav;
Addresses.Footer = Footer;
Addresses.DashboardS = DashboardS;
