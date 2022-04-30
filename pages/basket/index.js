import React from "react";
import BasketPage from "../../components/BasketPage/BasketPage";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import { useSelector } from "react-redux";
import Loading from "../../Layouts/Loading";
import { getSession } from "next-auth/react";

export default function Basket({ _user }) {
  const { product } = useSelector((state) => state);
  console.log(product);
  return (
    <>
      {!product.loading ? (
        <BasketPage products={product.cartItems} />
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
  return {
    props: { _user: session },
  };
}
Basket.Nav = Nav;
Basket.Footer = Footer;
