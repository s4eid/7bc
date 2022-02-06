import Image from "next/image";
import React from "react";
import order from "./order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Order({ o }) {
  const router = useRouter();
  return (
    <div
      className={order.mainContainer}
      onClick={() => router.push("/account/orders/1")}
    >
      <div className={order.productC}>
        <div className={order.productImage}>
          <Image src={o.img} layout="fill" />
        </div>
        <p>{o.name}</p>
      </div>
      <p>{o.price}</p>
      <div className={order.statusC}>
        <FontAwesomeIcon icon={faBoxOpen} />
      </div>
      {/* <p>{o.status}</p> */}
      <div className={order.iconHolder}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}
