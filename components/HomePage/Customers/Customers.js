import React from "react";
import customers from "./customers.module.css";
import { customersImages } from "../../../data/customers";
import Image from "next/image";
export default function Customers() {
  return (
    <div className={customers.container}>
      <div className={customers.mainContainer}>
        <h1 className={customers.title}>Projects</h1>
      </div>
      <div className={customers.customersMainContainer}>
        {customersImages.map((c, index) => (
          <div className={customers.imageHolder}>
            <Image src={c} key={index} layout="fill" />
          </div>
        ))}
      </div>
      <button
        className={customers.more}
        //       onClick={() => router.push("/")}
      >
        More
      </button>
    </div>
  );
}
