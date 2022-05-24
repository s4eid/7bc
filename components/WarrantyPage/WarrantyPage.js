import React from "react";
import warranty from "./warranty.module.css";
import { warrantyData } from "../../data/warranty";
import Child from "./Child";

export default function WarrantyPage() {
  return (
    <div className={warranty.mainContainer}>
      <h1 className={warranty.title}>Warranty And Return</h1>
      <div className={warranty.container}>
        {warrantyData.map((m, index) => (
          <Child name={m.name} key={index} text={m.text} />
        ))}
      </div>
    </div>
  );
}
