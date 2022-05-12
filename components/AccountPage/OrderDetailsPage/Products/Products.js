import React from "react";
import Image from "next/image";
import products from "./products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Products({ o }) {
  const router = useRouter();
  console.log(o);
  return (
    <div
      className={products.mainContainer}
      onClick={() => router.push(`/carpets/${o.product_id}`)}
    >
      <div className={products.productC}>
        <div className={products.productImage}>
          <Image src={o.img_1} layout="fill" />
        </div>
        <p>{o.name}</p>
      </div>
      <div className={products.priceHolder}>
        <p>{o.paid_price}$</p>
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
