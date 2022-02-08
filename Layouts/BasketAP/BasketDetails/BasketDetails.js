import React from "react";
import basketDetails from "./basketDetails.module.css";

export default function BasketDetails() {
  return (
    <div className={basketDetails.basketDHolder}>
      <p className={basketDetails.title}>Basket Details</p>
      <div className={basketDetails.detailsC}>
        <div className={basketDetails.infoHolder}>
          <p className={basketDetails.title}>Price</p>
          <p className={basketDetails.info}>2000$</p>
        </div>
        <div className={basketDetails.infoHolder}>
          <p className={basketDetails.title}>Shipping</p>
          <p className={basketDetails.info}>20$</p>
        </div>
        <div className={basketDetails.infoHolder}>
          <p className={basketDetails.title}>Discount</p>
          <p className={basketDetails.info}>0$</p>
        </div>
        <div className={basketDetails.infoHolder}>
          <p className={basketDetails.title}>Total</p>
          <p className={basketDetails.info}>2020$</p>
        </div>
      </div>
    </div>
  );
}
