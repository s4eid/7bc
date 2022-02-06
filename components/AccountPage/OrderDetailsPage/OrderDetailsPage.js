import React from "react";
import orderDetails from "./orderDetails.module.css";
import Products from "./Products/Products";
import Title from "./Title/Title";
import { ordersItems } from "../../../data/ordersItems";
import MoreDetails from "./MoreDetails/MoreDetails";

export default function OrderDetailsPage() {
  return (
    <div className={orderDetails.mainContainer}>
      <div className={orderDetails.titleContainer}>
        <Title />
      </div>
      {ordersItems.map((o, index) => (
        <Products o={o} key={index} />
      ))}
      <MoreDetails />
    </div>
  );
}
