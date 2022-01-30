import React from "react";
import related from "./related.module.css";
import { carpetsItems } from "../../../data/carpetsItems";
import Carpet from "../../CarpetPage/Carpets/Carpet";

export default function Related() {
  return (
    <div className={related.mainContainer}>
      <div className={related.title}>
        <p>Related Products</p>
      </div>
      <div className={related.mainRelateHolder}>
        {carpetsItems.map((c, index) => (
          <Carpet c={c} key={index} />
        ))}
      </div>
    </div>
  );
}
