import Image from "next/image";
import React from "react";
import category from "./category.module.css";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  return (
    <div className={category.mainContainer}>
      <div
        className={category.container}
        onClick={() => router.push("/carpets")}
      >
        <Image src="/carpetC.jpg" layout="fill" />
        <p className={category.title}>Carpet</p>
      </div>
      <div
        onClick={() => router.push("/kilims")}
        className={category.container}
      >
        <Image src="/kilimC.jpg" layout="fill" />
        <p className={category.title}>kilim</p>
      </div>
      <div
        onClick={() => router.push("/leathers")}
        className={category.container}
      >
        <Image src="/leatherC.jpg" layout="fill" />
        <p className={category.title}>Leather</p>
      </div>
      <div
        className={category.container}
        onClick={() => router.push("/tablecloths")}
      >
        <Image src="/tableClothC.jpg" layout="fill" />
        <p className={category.title}>Table & Bedcover</p>
      </div>
    </div>
  );
}
