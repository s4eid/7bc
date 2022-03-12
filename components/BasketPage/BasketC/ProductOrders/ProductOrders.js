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
          <Image src={o.img_1} alt="Product" layout="fill" />
        </div>
        <p>{o.name}</p>
      </div>
      <div className={productOrders.price}>
        <p>${o.price}</p>
      </div>
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
