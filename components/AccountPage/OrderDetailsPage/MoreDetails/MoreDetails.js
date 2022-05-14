import React from "react";
import moreDetails from "./moreDetails.module.css";

export default function MoreDetails({ order_info }) {
  return (
    <div className={moreDetails.mainContainer}>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Shipping:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>{order_info.shipping_price}$</p>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Address:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>{order_info.address}</p>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Country:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>{order_info.country}</p>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>City:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>{order_info.city}</p>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Area:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>{order_info.area}</p>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Phone Number:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>{order_info.phone_number}</p>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Paid Price:</p>
        </div>
        <div className={moreDetails.infoC}>
          <p>{order_info.paid_price}$</p>
        </div>
      </div>
    </div>
  );
}
