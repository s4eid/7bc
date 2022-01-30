import Image from "next/image";
import React from "react";
import carpetsItems from "./ourCarpets.module.css";
import { useRouter } from "next/router";

export default function Carpet({ c }) {
  const router = useRouter();
  return (
    <div
      className={carpetsItems.carpetMainHolder}
      onClick={() => router.push(`/carpets/${c.name}`)}
    >
      <div className={carpetsItems.carpetContainer}>
        <Image
          src={c.img}
          alt="carpets"
          layout="fill"
          loading="lazy"
          placeholder="blur"
          blurDataURL={c.img}
        />
      </div>
      <div className={carpetsItems.detailsContainer}>
        <p className={carpetsItems.detailName}>{c.name}</p>
        <p className={carpetsItems.detailPrice}>{c.price}$</p>
      </div>
    </div>
  );
}
