import React from "react";
import moreDetails from "./moreDetails.module.css";

export default function MoreDetails() {
  return (
    <div className={moreDetails.mainContainer}>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Shipping:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>0$</p>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Address:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>nevshehir/merkez EsenTepe Mah Yildiz Sok No:7 Kat:2</p>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Payment:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
}
