import React from "react";
import product from "../product.module.css";
export default function Info() {
  return (
    <>
      <div className={product.details}>
        <div className={product.holder}>
          <p className={product.for}>Family:</p>
          <p className={product.info}>Gold</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Age:</p>
          <p className={product.info}>88</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Size:</p>
          <p className={product.info}>2.5x4.3</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Stock:</p>
          <p className={product.info}>1</p>
        </div>
        <div className={product.holder}>
          <p className={product.for}>Origin:</p>
          <p className={product.info}>Iran</p>
        </div>
      </div>
      <div className={product.detailsMore}>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
    </>
  );
}
