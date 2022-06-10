import Image from "next/image";
import React from "react";
import productItems from "./ourProducts.module.css";
import { useRouter } from "next/router";

export default function Product({ c }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/carpets/${c.product_id}`)}
      className={productItems.carpetMainHolder}
    >
      <div className={productItems.carpetContainer}>
        <Image
          src={c.img_1}
          alt="product"
          layout="fill"
          loading="lazy"
          placeholder="blur"
          blurDataURL={c.img_1}
        />
      </div>
      <div className={productItems.detailsContainer}>
        <p className={productItems.detailName}>{c.name}</p>
        <p className={productItems.detailPrice}>{c.price}$</p>
      </div>
    </div>
  );
}
