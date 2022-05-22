import React, { useEffect, useState } from "react";
import BasketAP from "../../../Layouts/BasketAP/BasketAP";
import AddressPage from "../../../components/BasketPage/AddressPage/AddressPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_USER_ADDRESS } from "../../../graphql_f/users/Query/getUserAddress";
import { getSession } from "next-auth/react";
import { initializeApollo } from "../../../apolloConfig/apollo";
import { getUser_server } from "../../../Functions/userC";
import Loading from "../../../Layouts/Loading";

export default function Address() {
  const { product } = useSelector((state) => state);
  const [ip, setIp] = useState();
  useEffect(() => {
    fetch("https://api.ipify.org?format=json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, []);
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
      {product.cartItems.length !== 0 && !loading && ip && !user.loading ? (
        <AddressPage
          ip={ip}
          addressInfo={data.getUserAddress}
          userId={user.user_id}
        />
      ) : (
        <>
          <Loading />
        </>
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

Address.Nav = Nav;
Address.Footer = Footer;
Address.BasketAP = BasketAP;
