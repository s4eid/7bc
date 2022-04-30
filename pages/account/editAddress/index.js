import React, { useState, useEffect } from "react";
import EditAddressPage from "../../../components/AccountPage/EditAddressPage/EditAddressPage";
import Nav from "../../../Layouts/Nav/Nav";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_USER_ADDRESS } from "../../../graphql_f/users/Query/getUserAddress";
import Loading from "../../../Layouts/Loading";
import { initializeApollo } from "../../../apolloConfig/apollo";
import Footer from "../../../Layouts/Footer/Footer";
import { getSession } from "next-auth/react";
import { getUser_server } from "../../../Functions/userC";

export default function EditAddress() {
  const user = useSelector((state) => state.user);
  const [ip, setIp] = useState();
  useEffect(() => {
    fetch("https://api.ipify.org?format=json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, []);
  const { data, error, loading } = useQuery(GET_USER_ADDRESS, {
    variables: {
      user_id: user.user_id,
    },
    nextFetchPolicy: "network-only",
  });

  return (
    <>
      {!loading && ip ? (
        <EditAddressPage
          ip={ip}
          userId={user.user_id}
          address={data.getUserAddress}
        />
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
  const token = req.cookies.refreshToken;
  const user = await getUser_server(token, session?.user);
  const client = await initializeApollo();
  const { data } = await client.query({
    query: GET_USER_ADDRESS,
    variables: {
      user_id: user.user_id,
    },
  });
  if (!data.getUserAddress) {
    return {
      redirect: {
        destination: "/account",
        permanent: false,
      },
    };
  }
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

EditAddress.Nav = Nav;
EditAddress.Footer = Footer;
