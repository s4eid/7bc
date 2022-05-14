import React from "react";
import orderDetails from "./orderDetails.module.css";
import Products from "./Products/Products";
import Title from "./Title/Title";
import MoreDetails from "./MoreDetails/MoreDetails";

export default function OrderDetailsPage({ order }) {
  return (
    <div className={orderDetails.mainContainer}>
      <div className={orderDetails.titleContainer}>
        <Title
          date={order.order_info.created_at}
          order_id={order.order_info.order_id}
          total={order.order_info.paid_price}
          status={order.order_info.status}
        />
      </div>
      {order.order_items.map((o, index) => (
        <Products o={o} key={index} />
      ))}
      <MoreDetails order_info={order.order_info} />
    </div>
  );
}
