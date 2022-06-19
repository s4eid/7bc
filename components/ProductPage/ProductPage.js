import React from "react";
import Product from "./Product/Product";
import Related from "./Related/Related";

export default function ProductPage({ product, type }) {
  return (
    <>
      <Product p={product} />
      <Related type={type} product_id={product?.product_id} />
    </>
  );
}
