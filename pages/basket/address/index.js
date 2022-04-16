import React from "react";
import BasketAP from "../../../Layouts/BasketAP/BasketAP";
import AddressPage from "../../../components/BasketPage/AddressPage/AddressPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_USER_ADDRESS } from "../../../graphql_f/users/Query/getUserAddress";

export default function Address() {
  const router = useRouter();
  const { product } = useSelector((state) => state);
  const user = useSelector((d) => d.user);

  const { data, error, loading } = useQuery(GET_USER_ADDRESS, {
    variables: {
      user_id: user.user_id,
    },
    fetchPolicy: "network-only",
  });
  if (product.cartItems === 0 && typeof window !== "undefined") {
    router.push("/basket");
  }

  return (
    <>
      {product.cartItems.length !== 0 && !loading ? (
        <AddressPage addressInfo={data.getUserAddress} />
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </>
  );
}
export async function getServerSideProps({ req, res }) {
  if (!req.cookies.refreshToken) {
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

Address.Nav = Nav;
Address.Footer = Footer;
Address.BasketAP = BasketAP;
