import Image from "next/image";
import React from "react";
import footer from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMapReact from "google-map-react";
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
        <div className={footer.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.NEXT_PUBLIC_GOOGLE_MAP,
            }}
            defaultCenter={{ lat: 59.95, lng: 30.33 }}
            defaultZoom={10}
          ></GoogleMapReact>
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
