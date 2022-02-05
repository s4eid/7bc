import React from "react";
import orders from "./orders.module.css";
import Order from "./Order/Order";
import Title from "./Title/Title";
import { ordersItems } from "../../../data/ordersItems";

export default function OrdersPage() {
  return (
    <div className={orders.mainContainer}>
      <div className={orders.titleContainer}>
        <Title />
      </div>
      {ordersItems.map((o, index) => (
        <Order key={index} o={o} />
      ))}
    </div>
  );
}
