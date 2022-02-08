import React from "react";
import productOrders from "./productOrders.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductOrders({ o }) {
  return (
    <div className={productOrders.mainContainer}>
      <div className={productOrders.productC}>
        <div className={productOrders.productImage}>
          <Image src={o.img} alt="Product" layout="fill" />
        </div>
        <p>{o.name}</p>
      </div>
      <p className={productOrders.price}>{o.price}</p>
      <div className={productOrders.quantityContainer}>
        <div className={productOrders.quantityHolder}>
          <FontAwesomeIcon
            icon={faMinusSquare}
            className={productOrders.icon}
          />
          <p>{o.quantity}</p>
          <FontAwesomeIcon icon={faPlusSquare} className={productOrders.icon} />
        </div>
        <FontAwesomeIcon icon={faTrash} className={productOrders.icon} />
      </div>
    </div>
  );
}
