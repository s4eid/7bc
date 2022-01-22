import React, { useState, useEffect } from "react";
import nav from "./nav.module.css";
import Link from "next/link";
import { navItems } from "../../data/navItem";
import Image from "next/image";
import SideBar from "./SideBar";
import { useRouter } from "next/router";
import NavButtom from "./NavButtom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import PopUp from "./PopUp/PopUp";
export default function NavBar({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  const [pOpen, setPOpen] = useState(false);
  return (
    <>
      <div className={nav.container}>
        <div className={nav.linksContainer}>
          <ul>
            {navItems.map((n) => (
              <Link key={n.id} href={n.link}>
                <li>{n.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={nav.loginContainer}>
          <button
            onClick={() => setPOpen(!pOpen)}
            // onClick={() => router.push("/loginTeacher")}
            className={nav.loginBtn}
          >
            Login/Register
          </button>
        </div>
        <div className={nav.menuContainer} onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon
            icon={faBars}
            className={!navOpen ? nav.burger : nav.burgerOpen}
          />
        </div>
        <SideBar navItems={navItems} isOpen={navOpen} />
      </div>
      <NavButtom />
      {/* <PopUp pOpen={pOpen} setPOpen={setPOpen} /> */}
      {children}
    </>
  );
}
