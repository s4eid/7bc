import React from "react";
import navigation from "./navigation.module.css";
import { dashboardItems } from "../../../data/dashboardItems";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();
  return (
    <div className={navigation.mainC}>
      <ul className={navigation.navContainer}>
        {dashboardItems.map((d, index) => (
          <Link key={index} href={d.link}>
            <li
              className={
                router.pathname !== d.link
                  ? navigation.items
                  : navigation.itemsAc
              }
            >
              {d.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
