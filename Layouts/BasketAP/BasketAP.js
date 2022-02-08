import React from "react";
import Proccess from "./Proccess/Proccess";
import basketAp from "./basketAp.module.css";
import BasketDetails from "./BasketDetails/BasketDetails";
import { ordersItems } from "../../data/ordersItems";
import Basket from "./Basket/Basket";

export default function BasketAP({ children }) {
  return (
    <div className={basketAp.mainContainer}>
      <Proccess />
      <div className={basketAp.sideContainer}>
        {children}
        <div className={basketAp.sideHolder}>
          <div className={basketAp.container}>
            <p className={basketAp.title}> Basket</p>
            <div className={basketAp.orderItemC}>
              {ordersItems.map((p, index) => (
                <Basket p={p} key={index} />
              ))}
            </div>
          </div>
          <BasketDetails />
        </div>
      </div>
    </div>
  );
}
