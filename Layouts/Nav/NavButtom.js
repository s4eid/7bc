import React, { useState, useEffect } from "react";
import nav from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export default function NavButtom() {
  // const [navChange, setNavChange] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  // const scrolling = () => {
  //   if (window.scrollY > 99.99) {
  //     setNavChange(true);
  //   } else {
  //     setNavChange(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", scrolling);
  // }, []);
  return (
    <div className={nav.navBottomContainer}>
      {/* <div className={!navChange ? nav.navBottomContainer : nav.container_active}> */}
      {!searchOpen ? (
        <div className={nav.logoContainer}>
          <Link href="/">
            <Image
              alt="logo"
              loading="eager"
              className={nav.logo}
              src="/logo.svg"
              layout="intrinsic"
              width={50}
              height={50}
            />
          </Link>
        </div>
      ) : (
        <></>
      )}
      <div className={!searchOpen ? nav.searchContainerN : nav.searchContainer}>
        <input type="text" className={nav.searchInputOpenN} />
        <input
          type="text"
          className={searchOpen ? nav.searchInputOpen : nav.searchInputClose}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className={nav.searchIcon}
          onClick={() => setSearchOpen(!searchOpen)}
        />
      </div>
      {!searchOpen ? (
        <Link href="/basket">
          <div className={nav.bascketContainer}>
            <div className={nav.bascket}>
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className={nav.bascketIcon}
              />
            </div>
          </div>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
