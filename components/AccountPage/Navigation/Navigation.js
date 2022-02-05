import React from "react";
import navigation from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={navigation.mainC}>
      <ul className={navigation.navContainer}>
        <li>Addresses</li>
        <li>Orders</li>
        <li>Payment Methods</li>
      </ul>
    </div>
  );
}
