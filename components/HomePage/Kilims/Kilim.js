import Image from "next/image";
import React from "react";
import kilimItems from "./ourKilims.module.css";
import { useRouter } from "next/router";

export default function Kilim({ k }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/kilims/${k.product_id}`)}
      className={kilimItems.kilimMainHolder}
    >
      <div className={kilimItems.kilimContainer}>
        <Image
          src={k.img_1}
          alt="carpets"
          layout="fill"
          loading="lazy"
          placeholder="blur"
          blurDataURL={k.img_1}
        />
      </div>
      <div className={kilimItems.detailsContainer}>
        <p className={kilimItems.detailName}>{k.name}</p>
        {/* <p className={kilimItems.detailPrice}>{k.price}$</p> */}
      </div>
    </div>
  );
}
