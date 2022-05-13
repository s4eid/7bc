import Image from "next/image";
import React from "react";
import order from "./order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBoxOpen,
  faTruck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Order({ o }) {
  const router = useRouter();
  let created_at = JSON.parse(o.created_at);
  const date = new Date(created_at).toLocaleDateString();
  return (
    <div
      className={order.mainContainer}
      onClick={() => router.push(`/account/orders/${o.order_id}`)}
    >
      <div className={order.productC}>
        <p>{date} </p>
      </div>
      <div className={order.priceC}>
        <p>{o.paid_price}$</p>
      </div>
      <div className={order.statusC}>
        {o.status === 0 ? (
          <FontAwesomeIcon icon={faBoxOpen} />
        ) : o.status === 1 ? (
          <FontAwesomeIcon icon={faTruck} />
        ) : (
          <FontAwesomeIcon icon={faCheckCircle} />
        )}
      </div>
      <div className={order.iconHolder}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}
