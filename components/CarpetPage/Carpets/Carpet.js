import Image from "next/image";
import React from "react";
import productItems from "./ourCarpets.module.css";
import Link from "next/link";

export default function Carpet({ c }) {
  return (
    <Link href={`/carpets/${c.product_id}`} passHref>
      <a>
        <div className={productItems.productMainHolder}>
          <div className={productItems.productContainer}>
            <Image
              className={c.pieces <= 0 ? productItems.notAvailable : null}
              src={c.img_1}
              alt="carpets"
              layout="fill"
              loading="lazy"
            />
          </div>
          <div className={productItems.detailsContainer}>
            <div className={productItems.infoHolder}>
              <p className={productItems.detailName}>{c.name}</p>
              <p className={productItems.detailSize}>
                {c.pieces > 0 ? `${c.width}x${c.height}` : "Not Available"}
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
