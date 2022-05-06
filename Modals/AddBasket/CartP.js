import Image from "next/image";
import React from "react";
import cartP from "./cartP.module.css";

export default function CartP({ p }) {
  return (
    <div className={cartP.mainContainer}>
      <Image layout="fixed" height={100} width={50} src={p.img_1} />
      <p className={cartP.title}>{p.name}</p>
      <p className={cartP.price}>{p.price}$</p>
    </div>
  );
}
