import React from "react";
import Info from "./Info/Info";
import product from "./product.module.css";
import Slide from "./Slide/Slide";

export default function Product({ p }) {
  let imgs = [p.img_1, p.img_2, p.img_3];
  imgs = imgs.filter(function (item) {
    return item !== null;
  });
  return (
    <div className={product.mainContainer}>
      <div className={product.title}>
        <p>{p.name}</p>
      </div>
      <div className={product.detailsContainer}>
        <Slide imgs={imgs} />
        <Info
          family={p.family}
          age={p.age}
          width={p.width}
          height={p.height}
          stock={p.pieces}
          origin={p.origin}
          description={p.description}
        />
      </div>
      <div className={product.productBtnC}>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
