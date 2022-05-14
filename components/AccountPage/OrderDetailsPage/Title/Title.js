import React from "react";
import title from "./title.module.css";

export default function Title({ date, order_id, total, status }) {
  const parsedD = JSON.parse(date);
  const _date = new Date(parsedD).toLocaleDateString();
  return (
    <div className={title.mainContainer}>
      <div className={title.listT}>
        <div className={title.infoHolder}>
          <p className={title.titleC}>Order id</p>
          <p className={title.info}>{order_id}</p>
        </div>
        <div className={title.infoHolder}>
          <p className={title.titleC}>Total</p>
          <p className={title.info}>{total}$</p>
        </div>
        <div className={title.infoHolder}>
          <p className={title.titleC}>Date Placed</p>
          <p className={title.info}>{_date}</p>
        </div>
        <div className={title.infoHolder}>
          <p className={title.titleC}>Status</p>
          {status == 0 ? (
            <p className={title.info}>Preparing</p>
          ) : status == 1 ? (
            <p className={title.info}>On Shipping Company</p>
          ) : status == 3 ? (
            <p className={title.info}>Done</p>
          ) : (
            <p className={title.info}>Waiting</p>
          )}
        </div>
      </div>
    </div>
  );
}
