import React from "react";
import ourCarpets from "./ourCarpets.module.css";
import Carpet from "./Carpet";
import { carpetsItemsMore } from "../../../data/carpetsItems";
export default function OurCarpets() {
  return (
    <div className={ourCarpets.container}>
      <div className={ourCarpets.productMainContainer}>
        {carpetsItemsMore.map((carpet, index) => (
          <Carpet c={carpet} key={index} />
        ))}
      </div>
    </div>
  );
}
