import React from "react";
import BasketPage from "../../components/BasketPage/BasketPage";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import { useSelector } from "react-redux";

export default function Basket() {
  const { product } = useSelector((state) => state);
  console.log(product.cartItems.length);
  return <BasketPage products={product.cartItems} />;
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
Basket.Nav = Nav;
Basket.Footer = Footer;
