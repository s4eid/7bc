import React from "react";
import BasketAP from "../../../Layouts/BasketAP/BasketAP";
import PaymentPage from "../../../components/BasketPage/PaymentPage/PaymentPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
// import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getSession } from "next-auth/react";
import { initializeApollo } from "../../../apolloConfig/apollo";
import { GET_USER_INFO } from "../../../graphql_f/users/Query/getUserInfo";
import { useQuery } from "@apollo/client";
import { getUser_server } from "../../../Functions/userC";
import Loading from "../../../Layouts/Loading";

export default function Payment() {
  const { product, user } = useSelector((state) => state);
  const { data, loading } = useQuery(GET_USER_INFO, {
    variables: {
      userId: user.user_id,
    },
    fetchPolicy: "network-only",
  });
  // const router = useRouter();

  // if (product.cartItems === 0 && typeof window !== "undefined") {
  //   router.push("/basket");
  // }
  return (
    <>
      {!loading && product.cartItems.length !== 0 ? (
        <PaymentPage info={data.getUserInfo} user={user} product={product} />
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
  //   query: GET_USER_INFO,
  //   variables: { userId: user.user_id },
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

Payment.Nav = Nav;
Payment.Footer = Footer;
Payment.BasketAP = BasketAP;
