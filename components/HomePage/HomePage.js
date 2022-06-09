import React from "react";
import OurCarpets from "./Carpets/OurCarpets";
import Customers from "./Customers/Customers";
import OurKilims from "./Kilims/OurKilims";
import SliderC from "./Slide/SliderC";

export default function HomePage({ products }) {
  return (
    <>
      <SliderC />
      <OurCarpets carpet={products.carpet} />
      <OurKilims kilim={products.kilim} />
      <Customers />
    </>
  );
}
