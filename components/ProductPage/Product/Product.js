import React, { useState } from "react";
import Info from "./Info/Info";
import productC from "./product.module.css";
import Slide from "./Slide/Slide";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../Redux/Actions/Product";
import AddBasket from "../../../Modals/AddBasket/AddBasket";

export default function Product({ p }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  let imgs = [p.img_1, p.img_2, p.img_3];
  imgs = imgs.filter(function (item) {
    return item !== null;
  });
  return (
    <>
      <div className={productC.mainContainer}>
        <div className={productC.title}>
          <h1>{p.name}</h1>
        </div>
        <div className={productC.detailsContainer}>
          <Slide imgs={imgs} />
          <Info
            family={p.family}
            age={p.age}
            price={p.price}
            width={p.width}
            height={p.height}
            stock={p.pieces}
            made={p.made}
            material={p.material}
            shape={p.shape}
            origin={p.origin}
            description={p.description}
            id={p.product_id}
          />
        </div>
        <div className={productC.productBtnC}>
          {p.pieces > 0 ? (
            <button
              onClick={() => {
                dispatch(addProduct(p.product_id));
                setOpen(true);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button>Not Available</button>
          )}
        </div>
      </div>
      <AddBasket setOpen={setOpen} open={open} />
    </>
  );
}
