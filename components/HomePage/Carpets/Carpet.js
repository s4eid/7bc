import Image from "next/image";
import React from "react";
import carpetsItems from "./ourCarpets.module.css";
import { useRouter } from "next/router";

export default function Carpet({ c }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/carpets/${c.product_id}`)}
      className={carpetsItems.carpetMainHolder}
    >
      <div className={carpetsItems.carpetContainer}>
        <Image
          src={c.img_1}
          alt="carpets"
          layout="fill"
          loading="lazy"
          placeholder="blur"
          blurDataURL={c.img_1}
        />
      </div>
      <div className={carpetsItems.detailsContainer}>
        <p className={carpetsItems.detailName}>{c.name}</p>
        {/* <p className={carpetsItems.detailPrice}>{c.price}$</p> */}
      </div>
    </div>
  );
}
