import React from "react";
import Image from "next/image";
import loading from "./loading.module.css";

export default function Loading() {
  return (
    <div className={loading.mainContainer}>
      <Image
        src="/logo.svg"
        alt="loading..."
        layout="fixed"
        width={32}
        height={75}
      />
      {/* <p>Loading...</p> */}
    </div>
  );
}
