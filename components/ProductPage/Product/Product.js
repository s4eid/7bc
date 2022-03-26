import React from "react";
import Info from "./Info/Info";
import productC from "./product.module.css";
import Slide from "./Slide/Slide";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../Redux/Actions/Product";

export default function Product({ p }) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);
  console.log(product);
  let imgs = [p.img_1, p.img_2, p.img_3];
  imgs = imgs.filter(function (item) {
    return item !== null;
  });
  return (
    <div className={productC.mainContainer}>
      <div className={productC.title}>
        <p>{p.name}</p>
      </div>
      <div className={productC.detailsContainer}>
        <Slide imgs={imgs} />
        <Info
          family={p.family}
          age={p.age}
          width={p.width}
          height={p.height}
          stock={p.pieces}
          origin={p.origin}
          description={p.description}
          id={p.product_id}
        />
      </div>
      <div className={productC.productBtnC}>
        <button onClick={() => dispatch(addProduct(p.product_id))}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
