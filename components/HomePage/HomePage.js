import React from "react";
import OurProducts from "./Products/OurProducts";
import Customers from "./Customers/Customers";
import SliderC from "./Slide/SliderC";
import Category from "./Category/Category";

export default function HomePage({ products }) {
  return (
    <>
      <SliderC />
      <Category />
      <OurProducts products={products.products} />
      <Customers />
    </>
  );
}
