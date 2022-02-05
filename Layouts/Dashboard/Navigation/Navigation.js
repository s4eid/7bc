import React from "react";
import navigation from "./navigation.module.css";
import { dashboardItems } from "../../../data/dashboardItems";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className={navigation.mainC}>
      <ul className={navigation.navContainer}>
        {dashboardItems.map((d, index) => (
          <Link href={d.link}>
            <li key={index} className={navigation.items}>
              {d.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
