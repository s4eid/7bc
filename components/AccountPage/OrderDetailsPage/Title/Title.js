import React from "react";
import title from "./title.module.css";

export default function Title() {
  return (
    <div className={title.mainContainer}>
      <div className={title.listT}>
        <div className={title.infoHolder}>
          <p className={title.titleC}>Order id</p>
          <p className={title.info}>f45asdf4asf45sa5fsa44</p>
        </div>
        <div className={title.infoHolder}>
          <p className={title.titleC}>Total</p>
          <p className={title.info}>1550$</p>
        </div>
        <div className={title.infoHolder}>
          <p className={title.titleC}>Date Placed</p>
          <p className={title.info}>10/8/2020</p>
        </div>
        <div className={title.infoHolder}>
          <p className={title.titleC}>Status</p>
          <p className={title.info}>Delivred Jan,25,2022</p>
        </div>
      </div>
    </div>
  );
}
