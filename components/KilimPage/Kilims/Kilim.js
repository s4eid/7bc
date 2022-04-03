import Image from "next/image";
import React from "react";
import productItems from "./ourKilims.module.css";
import { useRouter } from "next/router";

export default function Kilim({ c }) {
  const router = useRouter();
  return (
    <div
      className={productItems.productMainHolder}
      onClick={() => router.push(`/kilims/${c.product_id}`)}
    >
      <div className={productItems.productContainer}>
        <Image src={c.img_1} alt="kilims" layout="fill" loading="lazy" />
      </div>
      <div className={productItems.detailsContainer}>
        <div className={productItems.infoHolder}>
          <p className={productItems.detailName}>{c.name}</p>
          <p className={productItems.detailSize}>
            {c.width}x{c.height}
          </p>
        </div>
        <div className={productItems.infoHolderP}>
          <p className={productItems.detailPrice}>{c.price}$</p>
        </div>
      </div>
    </div>
  );
}
