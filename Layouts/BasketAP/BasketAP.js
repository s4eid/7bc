import React from "react";
import Proccess from "./Proccess/Proccess";
import basketAp from "./basketAp.module.css";
import BasketDetails from "./BasketDetails/BasketDetails";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Basket from "./Basket/Basket";

export default function BasketAP({ children }) {
  const router = useRouter();
  const { product } = useSelector((state) => state);
  const path = router.pathname;
  // if (product.cardItems !== 0 && typeof window !== "undefined") {
  //   router.push("/basket");
  // }
  return (
    <div className={basketAp.mainContainer}>
      <Proccess />
      <div className={basketAp.sideContainer}>
        {children}
        <div className={basketAp.sideHolder}>
          {path !== "/basket/payment" ? (
            <div className={basketAp.container}>
              <p className={basketAp.title}>Basket</p>

              <div className={basketAp.orderItemC}>
                {product.cartItems.map((p, index) => (
                  <Basket p={p} key={index} />
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
          <BasketDetails product={product.cartItems} />
        </div>
      </div>
    </div>
  );
}
