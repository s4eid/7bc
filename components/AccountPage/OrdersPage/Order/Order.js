import Image from "next/image";
import React from "react";
import order from "./order.module.css";

export default function Order({ o }) {
  return (
    <div className={order.mainContainer}>
      <div className={order.productC}>
        <div className={order.productImage}>
          <Image src={o.img} layout="fill" />
        </div>
        <p>{o.name}</p>
      </div>
      <p>{o.price}</p>
      <p>{o.status}</p>
    </div>
  );
}
