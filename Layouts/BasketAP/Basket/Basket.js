import Image from "next/image";
import React from "react";
import basket from "./basket.module.css";

export default function Basket({ p }) {
  return (
    <div className={basket.holder}>
      <div className={basket.imageC}>
        <Image src={p.img_1} layout="fill" />
      </div>
      <p>
        ${p.price}x{p.quantity}
      </p>
    </div>
  );
}
