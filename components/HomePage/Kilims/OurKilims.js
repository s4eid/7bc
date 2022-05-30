import React from "react";
import ourKilims from "./ourKilims.module.css";
import Kilim from "./Kilim";
import { kilimsItems } from "../../../data/kilimsItems";
import { useRouter } from "next/router";
export default function OurKilims() {
  const router = useRouter();
  return (
    <div className={ourKilims.container}>
      <div className={ourKilims.mainContainer}>
        <h1 className={ourKilims.title}>Our Kilims</h1>
      </div>
      <div className={ourKilims.kilimMainContainer}>
        {kilimsItems.map((kilim, index) => (
          <Kilim k={kilim} key={index} />
        ))}
      </div>
      <button className={ourKilims.more} onClick={() => router.push("/kilims")}>
        More
      </button>
    </div>
  );
}
