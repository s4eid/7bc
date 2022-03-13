import React from "react";
import basket from "./basket.module.css";
import BasketC from "./BasketC/BasketC";
import Proccess from "./Proccess/Proccess";

export default function BasketPage({ products }) {
  return (
    <div className={basket.mainContainer}>
      <Proccess />
      <BasketC products={products} />
    </div>
  );
}
