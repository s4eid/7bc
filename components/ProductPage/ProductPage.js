import React from "react";
import Product from "./Product/Product";
import Related from "./Related/Related";

export default function ProductPage({ product }) {
  return (
    <>
      <Product p={product} />
      <Related />
    </>
  );
}
