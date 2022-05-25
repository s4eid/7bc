import React from "react";
import privacy from "./privacy.module.css";
import { privacyData } from "../../data/privacy";
import Child from "./Child";

export default function PrivacyPage() {
  return (
    <div className={privacy.mainContainer}>
      <h1 className={privacy.title}>Privacy Policy</h1>
      <div className={privacy.container}>
        {privacyData.map((m, index) => (
          <Child name={m.name} key={index} text={m.text} />
        ))}
      </div>
    </div>
  );
}
