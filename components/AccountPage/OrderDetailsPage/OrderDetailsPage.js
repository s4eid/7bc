import React from "react";
import orderDetails from "./orderDetails.module.css";
import Products from "./Products/Products";
import Title from "./Title/Title";

export default function OrderDetailsPage() {
  return (
    <div className={orderDetails.mainContainer}>
      <div className={orderDetails.titleContainer}>
        <Title />
      </div>
      <Products />
    </div>
  );
}
