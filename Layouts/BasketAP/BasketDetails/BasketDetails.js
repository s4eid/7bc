import React from "react";
import basketDetails from "./basketDetails.module.css";

export default function BasketDetails({ product }) {
  return (
    <div className={basketDetails.basketDHolder}>
      <h1 className={basketDetails.titleC}>Basket Details</h1>
      <div className={basketDetails.detailsC}>
        <div className={basketDetails.infoHolder}>
          <p className={basketDetails.title}>Price</p>
          <p className={basketDetails.info}>
            ${product.reduce((x, y) => x + y.price * y.quantity, 0)}
          </p>
        </div>
        <div className={basketDetails.infoHolder}>
          <p className={basketDetails.title}>Shipping</p>
          <p className={basketDetails.info}>0$</p>
        </div>
        <div className={basketDetails.infoHolder}>
          <p className={basketDetails.title}>Discount</p>
          <p className={basketDetails.info}>0$</p>
        </div>
        <div className={basketDetails.infoHolder}>
          <p className={basketDetails.title}>Total</p>
          <p className={basketDetails.info}>
            ${product.reduce((x, y) => x + y.price * y.quantity, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
