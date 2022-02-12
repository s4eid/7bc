import Image from "next/image";
import React from "react";
import footer from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

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
          <div className={footer.contactContainer}>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faTelegram} />
          </div>
        </div>
      </div>
    </>
  );
}
