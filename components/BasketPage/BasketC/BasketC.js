import React from "react";
import basketC from "./basketC.module.css";
import ProductOrders from "./ProductOrders/ProductOrders";
import { useRouter } from "next/router";

export default function BasketC({ products }) {
  const router = useRouter();
  return (
    <div className={basketC.mainContainer}>
      <div className={basketC.basketHolder}>
        <h1 className={basketC.titleC}>
          {products.length !== 0 ? "Basket" : "Basket is emty!!!"}
        </h1>
        <div className={basketC.productContainer}>
          <div className={basketC.productHC}>
            {products.map((o, index) => (
              <ProductOrders key={index} o={o} />
            ))}
          </div>
        </div>
      </div>
      <div className={basketC.basketDHolder}>
        <h1 className={basketC.titleC}>Basket Details</h1>
        <div className={basketC.detailsC}>
          <div className={basketC.infoHolder}>
            <p className={basketC.title}>Price</p>
            <p className={basketC.info}>
              ${products.reduce((x, y) => x + y._price, 0)}
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
