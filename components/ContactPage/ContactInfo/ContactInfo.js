import React from "react";
import contactInfo from "./contactInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Map from "./Map";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

const MapWrapped = withScriptjs(withGoogleMap(Map));
export default function ContactInfo() {
  return (
    <div className={contactInfo.mainC}>
      <div className={contactInfo.childC}>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faInstagram} />
          <p>rughousesb</p>
        </div>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faTelegram} />
          <p>+905393703956</p>
        </div>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faWhatsapp} />
          <p>+905510193686</p>
        </div>
      </div>
      <div className={contactInfo.childC}>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faMailBulk} />
          <p>7bc@gmail.com</p>
        </div>
        <div className={contactInfo.infoHolder}>
          <FontAwesomeIcon className={contactInfo.icon} icon={faPhone} />
          <p>+905393703956</p>
        </div>
        <div className={contactInfo.infoHolder}>
          <p>Müze Cd. No:36, 50180 Göreme/Nevşehir Merkez/Nevşehir</p>
        </div>
      </div>
      <div className={contactInfo.childCMap}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
