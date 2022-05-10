import React from "react";
import contactInfo from "./contactInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from "google-map-react";

export default function ContactInfo() {
  return (
    <div className={contactInfo.mainC}>
      <div className={contactInfo.childC}>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faInstagram} />
          <p>@7bc</p>
        </div>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faTelegram} />
          <p>@7bc</p>
        </div>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faWhatsapp} />
          <p>@7bc</p>
        </div>
      </div>
      <div className={contactInfo.childC}>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faMailBulk} />
          <p>7bc@gmail.com</p>
        </div>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faPhone} />
          <p>+905510193686</p>
        </div>
        <div className={contactInfo.infoHolder}>
          <p>Müze Cd. No:36, 50180 Göreme/Nevşehir Merkez/Nevşehir</p>
        </div>
      </div>
      <div className={contactInfo.childCMap}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAP,
          }}
          defaultCenter={{ lat: 38.64403004130668, lng: 34.83221456271912 }}
          defaultZoom={10}
        ></GoogleMapReact>
      </div>
    </div>
  );
}
