import React, { useState, useEffect } from "react";
import nav from "./nav.module.css";
import Link from "next/link";
import { navItems } from "../../data/navItem";
import SideBar from "./SideBar";
import NavButtom from "./NavButtom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../Redux/Actions/User/user";
export default function NavBar({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  const email = user?.full_name;
  const letter = email?.charAt(0);
  return (
    <>
      <div className={nav.container}>
        <div className={nav.linksContainer}>
          <ul>
            {navItems.map((n) => (
              <Link key={n.id} href={n.link}>
                <li
                  className={
                    router.pathname === n.link
                      ? nav.activeLink
                      : nav.notActiveLink
                  }
                >
                  {n.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={nav.loginContainer}>
          {email === null ? (
            <button
              onClick={() => router.push("/login")}
              className={nav.loginBtn}
            >
              Login/Register
            </button>
          ) : (
            <div
              className={nav.profile}
              onClick={() => router.push("/account")}
            >
              <p>{letter}</p>
            </div>
          )}
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
      {children}
    </>
  );
}
