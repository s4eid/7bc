import React from "react";
import loading from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={loading.mainContainer}>
      <Image src={"/loading.svg"} layout="fixed" height={100} width={100} />
    </div>
  );
}
