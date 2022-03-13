import React, { useEffect } from "react";
import BasketPage from "../../components/BasketPage/BasketPage";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductsProperty } from "../../Redux/Actions/Product/index";

export default function Basket(props) {
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsProperty(product.cartItems));
  }, []);
  return (
    <>
      {product.cartItemProperty.length !== 0 || !product.loading ? (
        <BasketPage
          products={product.cartItemProperty}
          cartDetails={product.cartDetails}
        />
      ) : (
        <p>loading</p>
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
Basket.Nav = Nav;
Basket.Footer = Footer;
