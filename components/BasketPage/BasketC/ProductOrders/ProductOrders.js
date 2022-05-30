import React from "react";
import productOrders from "./productOrders.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  plusQuantity,
  minusQuantity,
  deleteProduct,
} from "../../../../Redux/Actions/Product";
import { useRouter } from "next/router";

export default function ProductOrders({ o }) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className={productOrders.mainContainer}>
      <div
        className={productOrders.productC}
        onClick={() => router.push(`/carpets/${o.product_id}`)}
      >
        <div className={productOrders.productImage}>
          <Image src={o.img_1} alt="Product" layout="fill" />
        </div>
        <p>{o.name}</p>
      </div>
      <div
        className={productOrders.price}
        onClick={() => router.push(`/carpets/${o.product_id}`)}
      >
        <p>${o._price}</p>
      </div>
      <div className={productOrders.quantityContainer}>
        <div className={productOrders.quantityHolder}>
          <FontAwesomeIcon
            icon={faMinusSquare}
            onClick={() => dispatch(minusQuantity(o.product_id))}
            className={productOrders.icon}
          />
          <p>{o.quantity}</p>
          <FontAwesomeIcon
            onClick={() => dispatch(plusQuantity(o.product_id))}
            icon={faPlusSquare}
            className={productOrders.icon}
          />
        </div>
        <FontAwesomeIcon
          icon={faTrash}
          className={productOrders.icon}
          onClick={() => dispatch(deleteProduct(o.product_id))}
        />
      </div>
    </div>
  );
}
