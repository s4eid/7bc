import React from "react";
import title from "./title.module.css";

export default function Title() {
  return (
    <div className={title.mainContainer}>
      <ul className={title.listT}>
        <li>Date</li>
        <li>Price</li>
        <li>Status</li>
      </ul>
    </div>
  );
}
