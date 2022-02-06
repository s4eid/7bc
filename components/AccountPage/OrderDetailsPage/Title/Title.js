import React from "react";
import title from "./title.module.css";

export default function Title() {
  return (
    <div className={title.mainContainer}>
      <div className={title.listT}>
        <div className={title.infoHolder}>
          <p>Order id</p>
          <p>f45asdf4asf45sa5fsa44</p>
        </div>
        <div className={title.infoHolder}>
          <p>Total</p>
          <p>1550$</p>
        </div>
        <div className={title.infoHolder}>
          <p>Date Placed</p>
          <p>10/8/2020</p>
        </div>
        <div className={title.infoHolder}>
          <p>Status</p>
          <p>Delivred Jan,25,2022</p>
        </div>
      </div>
    </div>
  );
}
