import Image from "next/image";
import React from "react";
import footer from "./footer.module.css";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer({ children }) {
  return (
    <>
      {children}
      <div className={footer.mainContainer}>
        <div className={footer.logo}>
          <Image src="/logo.svg" height={50} width={50} layout="fixed" />
          <p>Copyright © 2022 7bc. All rights reserved.</p>
        </div>
        <div className={footer.contactHolder}>
          <div className={footer.brandPayI}>
            <Image src={"/logo_band_white.svg"} layout="fill" />
          </div>
          <div className={footer.contactContainer}>
            <div className={footer.IconHolder}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className={footer.IconHolder}>
              <FontAwesomeIcon icon={faTelegram} />
            </div>
            <div className={footer.IconHolder}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </div>
        </div>
        <div className={footer.mapContainer}>
          <div className={footer.policyC}>
            <h1>Policys</h1>
            <Link href="/distance-sales-contract">
              <li>Distance And Sales</li>
            </Link>
            <Link href="/warranty-return-policy">
              <li>Warranty And Policy</li>
            </Link>
            <Link href="/privacy-policy">
              <li>Privacy And Policy</li>
            </Link>
          </div>
          <div className={footer.policyC}>
            <h1>Corporate</h1>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </div>
          <div className={footer.policyC}>
            <h1>Products</h1>
            <Link href="/carpets">
              <li>Carpet</li>
            </Link>
            <Link href="/kilims">
              <li>Kilim</li>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
