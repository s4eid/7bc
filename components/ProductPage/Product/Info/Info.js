import React from "react";
import product from "../product.module.css";
export default function Info({
  family,
  age,
  width,
  height,
  stock,
  description,
  origin,
  price,
  shape,
  made,
  material,
  id,
}) {
  return (
    <>
      <div className={product.details}>
        <div className={product.holder}>
          <p className={product.for}>Family:</p>
          <p className={product.info}>{family}</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Material:</p>
          <p className={product.info}>{material}</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Made:</p>
          <p className={product.info}>{made}</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Shape:</p>
          <p className={product.info}>{shape}</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Age:</p>
          <p className={product.info}>{age}</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Size:</p>
          <p className={product.info}>
            {width}x{height}
          </p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Stock:</p>
          <p className={product.info}>{stock}</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Origin:</p>
          <p className={product.info}>{origin}</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>{price}$</p>
          {/* <p className={product.info}>{price}$</p> */}
        </div>
        <div className={product.holder}>
          <p className={product.infoId}>{id}</p>
        </div>
      </div>
      <div className={product.detailsMore}>
        <p>{description}</p>
      </div>
    </>
  );
}
