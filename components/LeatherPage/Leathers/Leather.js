import Image from "next/image";
import React from "react";
import productItems from "./ourLeathers.module.css";
import Link from "next/link";

export default function Leather({ c }) {
  return (
    <Link href={`/leathers/${c.product_id}`} passHref>
      <a>
        <div className={productItems.productMainHolder}>
          <div className={productItems.productContainer}>
            <Image
              src={c.img_1}
              alt="leather_product"
              layout="fill"
              loading="lazy"
            />
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
      </a>
    </Link>
  );
}
