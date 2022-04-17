import Image from "next/image";
import React from "react";
import footer from "./footer.module.css";
// import GoogleMapReact from "google-map-react";

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
          <Image src="/visa.svg" height={50} width={50} layout="fixed" />
          <Image src="/mastercard.svg" height={50} width={50} layout="fixed" />
          {/* <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.NEXT_PUBLIC_GOOGLE_MAP,
            }}
            defaultCenter={{ lat: 38.64403004130668, lng: 34.83221456271912 }}
            defaultZoom={10}
          ></GoogleMapReact> */}
        </div>
        <div className={footer.contactHolder}>
          <div className={footer.contactContainer}>
            <Image src="/telegram.svg" height={35} width={35} layout="fixed" />
            <Image src="/whatsapp.svg" height={35} width={35} layout="fixed" />
            <Image src="/instagram.svg" height={35} width={35} layout="fixed" />
          </div>
        </div>
      </div>
    </>
  );
}
