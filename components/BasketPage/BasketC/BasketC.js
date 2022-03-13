import React from "react";
import basketC from "./basketC.module.css";
import ProductOrders from "./ProductOrders/ProductOrders";
import { useRouter } from "next/router";

export default function BasketC({ products }) {
  const router = useRouter();
  return (
    <div className={basketC.mainContainer}>
      <div className={basketC.basketHolder}>
        <p className={basketC.title}>
          {products.length !== 0 ? "Basket" : "Basket is emty!!!"}
        </p>
        <div className={basketC.productContainer}>
          <div className={basketC.productHC}>
            {products.map((o, index) => (
              <ProductOrders key={index} o={o} />
            ))}
          </div>
        </div>
      </div>
      <div className={basketC.basketDHolder}>
        <p className={basketC.title}>Basket Details</p>
        <div className={basketC.detailsC}>
          <div className={basketC.infoHolder}>
            <p className={basketC.title}>Price</p>
            <p className={basketC.info}>
              ${products.reduce((x, y) => x + y.price * y.quantity, 0)}
            </p>
          </div>
          <div className={basketC.infoHolder}>
            <p className={basketC.title}>Shipping</p>
            <p className={basketC.info}>$0</p>
          </div>
          <div className={basketC.infoHolder}>
            <p className={basketC.title}>Discount</p>
            <p className={basketC.info}>$0</p>
          </div>
          <div className={basketC.infoHolder}>
            <p className={basketC.title}>Total</p>
            <p className={basketC.info}>
              ${products.reduce((x, y) => x + y.price * y.quantity, 0)}
            </p>
          </div>
        </div>
        {products.length !== 0 ? (
          <button
            className={basketC.proccessTo}
            onClick={() => router.push("/basket/address")}
          >
            Proccess To Address
          </button>
        ) : (
          <button className={basketC.proccessTo}>Basket Is Emty</button>
        )}
      </div>
    </div>
  );
}
