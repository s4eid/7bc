import Image from "next/image";
import React from "react";
import Info from "./Info/Info";
import product from "./product.module.css";
import Slide from "./Slide/Slide";

export default function Product({ p }) {
  return (
    <div className={product.mainContainer}>
      <div className={product.title}>
        <p>Coolimi View</p>
      </div>
      <div className={product.detailsContainer}>
        <Slide />
        <Info />
      </div>
      <div className={product.addToCart}>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
