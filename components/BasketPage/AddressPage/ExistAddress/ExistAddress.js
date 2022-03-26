import React from "react";
import existAddress from "./existAddress.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ExistAddress({ userAddress }) {
  return (
    <div className={existAddress.mainContainer}>
      <div className={existAddress.iconC}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <div className={existAddress.addressHolder}>
        <p>{userAddress.address + " " + userAddress.zip_code}</p>
      </div>
      <div className={existAddress.iconC}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </div>
  );
}
