import React from "react";
import sideBar from "./sideBar.module.css";
import Link from "next/link";
export default function SideBar({ navItems, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={isOpen ? sideBar.container : sideBar.containerClose}>
      <ul className={sideBar.menuItems}>
        {navItems.map((n) => (
          <Link key={n.id} href={n.link}>
            <li>{n.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
