import React from "react";
import basketC from "./basketC.module.css";
import { ordersItems } from "../../../data/ordersItems";
import ProductOrders from "./ProductOrders/ProductOrders";

export default function BasketC() {
  return (
    <div className={basketC.mainContainer}>
      <div className={basketC.basketHolder}>
        <p className={basketC.title}>Basket</p>
        <div className={basketC.productContainer}>
          {ordersItems.map((o, index) => (
            <ProductOrders key={index} o={o} />
          ))}
        </div>
      </div>
      <div className={basketC.basketDHolder}>
        <p className={basketC.title}>Basket Details</p>
        <div className={basketC.detailsC}>
          <div className={basketC.infoHolder}>
            <p className={basketC.title}>Price</p>
            <p className={basketC.info}>2000$</p>
          </div>
          <div className={basketC.infoHolder}>
            <p className={basketC.title}>Shipping</p>
            <p className={basketC.info}>20$</p>
          </div>
          <div className={basketC.infoHolder}>
            <p className={basketC.title}>Discount</p>
            <p className={basketC.info}>0$</p>
          </div>
          <div className={basketC.infoHolder}>
            <p className={basketC.title}>Total</p>
            <p className={basketC.info}>2020$</p>
          </div>
        </div>
      </div>
    </div>
  );
}
