import React from "react";
import BasketAP from "../../../Layouts/BasketAP/BasketAP";
import PaymentPage from "../../../components/BasketPage/PaymentPage/PaymentPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Payment() {
  const router = useRouter();
  const { product } = useSelector((state) => state);
  if (product.cartItems === 0 && typeof window !== "undefined") {
    router.push("/basket");
  }
  return <>{product.cartItems.length !== 0 ? <PaymentPage /> : <></>}</>;
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

Payment.Nav = Nav;
Payment.Footer = Footer;
Payment.BasketAP = BasketAP;
