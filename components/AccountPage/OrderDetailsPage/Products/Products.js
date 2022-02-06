import React from "react";
import Image from "next/image";
import products from "./products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Products({ o }) {
  const router = useRouter();
  return (
    <div
      className={products.mainContainer}
      onClick={() => router.push("/carpets/1")}
    >
      <div className={products.productC}>
        <div className={products.productImage}>
          <Image src={o.img} layout="fill" />
        </div>
        <p>{o.name}</p>
      </div>
      <div className={products.priceHolder}>
        <p>{o.price}</p>
      </div>
      <div className={products.quantityHolder}>
        <p>{o.quantity}</p>
      </div>
      <div className={products.iconHolder}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}
