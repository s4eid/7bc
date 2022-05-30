import React from "react";
import ourCarpets from "./ourCarpets.module.css";
import Carpet from "./Carpet";
import { useRouter } from "next/router";
import { carpetsItems } from "../../../data/carpetsItems";
export default function OurCarpets() {
  const router = useRouter();
  return (
    <div className={ourCarpets.container}>
      <div className={ourCarpets.mainContainer}>
        <h1 className={ourCarpets.title}>Our Carpets</h1>
      </div>
      <div className={ourCarpets.carpetMainContainer}>
        {carpetsItems.map((carpet, index) => (
          <Carpet c={carpet} key={index} />
        ))}
      </div>
      <button
        className={ourCarpets.more}
        onClick={() => router.push("/carpets")}
      >
        More
      </button>
    </div>
  );
}
