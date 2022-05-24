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

export default function Footer({ children }) {
  return (
    <>
      {children}
      <div className={footer.mainContainer}>
        <div className={footer.logo}>
          <Image src="/logo.svg" height={50} width={50} layout="fixed" />
          <p>Copyright © 2022 7bc. All rights reserved.</p>
        </div>
        <div className={footer.mapContainer}>
          <div className={footer.shoppingC}>
            <p className={footer.secureTitle}>Secure Shopping</p>
            <Image src="/visa.svg" height={50} width={50} layout="fixed" />
            <Image
              src="/mastercard.svg"
              height={50}
              width={50}
              layout="fixed"
            />
            <Image src="/troy.svg" height={50} width={50} layout="fixed" />
          </div>

          <div className={footer.shippingC}>
            <p className={footer.secureTitle}>Fast Shipping</p>
            <FontAwesomeIcon icon={faShippingFast} />
          </div>
        </div>
        <div className={footer.contactHolder}>
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
      </div>
    </>
  );
}
