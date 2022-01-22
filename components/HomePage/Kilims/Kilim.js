import Image from "next/image";
import React from "react";
import kilimItems from "./ourKilims.module.css";

export default function Kilim({ k }) {
  return (
    <div className={kilimItems.kilimMainHolder}>
      <div className={kilimItems.kilimContainer}>
        <Image
          src={k.img}
          alt="carpets"
          layout="fixed"
          loading="lazy"
          placeholder="blur"
          blurDataURL={k.img}
          height={300}
          width={250}
        />
      </div>
      <div className={kilimItems.detailsContainer}>
        <p className={kilimItems.detailName}>{k.name}</p>
        <p className={kilimItems.detailPrice}>{k.price}$</p>
      </div>
    </div>
  );
}
