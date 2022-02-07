import React from "react";
import address from "./address.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Address() {
  return (
    <div className={address.mainContainer}>
      <div className={address.iconC}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <div className={address.addressHolder}>
        <p>
          Nevsehir/merkez besiktas mah yildiz sok no:10 kat:3 postalcode:50100
        </p>
      </div>
      <div className={address.iconC}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </div>
  );
}
