import React from "react";
import address from "./address.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Address({ userAddress }) {
  return (
    <div className={address.mainContainer}>
      <div className={address.iconC}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <div className={address.addressHolder}>
        <p>{userAddress.address + " " + userAddress.zip_code}</p>
      </div>
      <div className={address.iconC}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </div>
  );
}
