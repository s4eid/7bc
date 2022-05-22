import React from "react";
import orders from "./orders.module.css";
import Order from "./Order/Order";
import Title from "./Title/Title";

export default function OrdersPage({ _orders }) {
  console.log(_orders);
  return (
    <div className={orders.mainContainer}>
      <div className={orders.titleContainer}>
        <Title />
      </div>
      {_orders?.map((o, index) => {
        return <>{o.status !== 2 ? <Order key={index} o={o} /> : <></>}</>;
      })}
    </div>
  );
}
