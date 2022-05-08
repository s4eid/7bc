import React from "react";
import ourKilims from "./ourKilims.module.css";
import Kilim from "./Kilim";
import { kilimsItems } from "../../../data/kilimsItems";
export default function OurKilims() {
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
      <button className={ourKilims.more}>More</button>
    </div>
  );
}
