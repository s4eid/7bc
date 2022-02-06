import Image from "next/image";
import React from "react";
import order from "./order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className={order.iconHolder}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}
