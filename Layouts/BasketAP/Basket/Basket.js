import Image from "next/image";
import React from "react";
import basket from "./basket.module.css";
import { useRouter } from "next/router";

export default function Basket({ p }) {
  const router = useRouter();
  return (
    <div
      className={basket.holder}
      onClick={() => router.push(`/carpets/${p.product_id}`)}
    >
      <div className={basket.imageC}>
        <Image src={p.img_1} layout="fill" />
      </div>
      <p>
        ${p.price}x{p.quantity}
      </p>
    </div>
  );
}
