import React, { useState } from "react";
import distance from "./distanceSC.module.css";
import { distanceData } from "../../data/DistanceSC";
import Child from "./Child";

export default function DistanceSCPage() {
  return (
    <div className={distance.mainContainer}>
      <h1 className={distance.title}>Distance Sales Agreement</h1>
      <div className={distance.container}>
        {distanceData.map((m, index) => (
          <Child name={m.name} key={index} text={m.text} />
        ))}
      </div>
    </div>
  );
}
