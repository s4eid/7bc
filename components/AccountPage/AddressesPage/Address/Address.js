import React from "react";
import address from "./address.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Address({ userAddress }) {
  return (
    <div className={address.mainContainer}>
      <div className={address.iconC}>
        <FontAwesomeIcon className={address.iconCIcon} icon={faMapMarkerAlt} />
      </div>
      <div className={address.mainHolder}>
        <div className={address.addressHolder}>
          <p className={address.main}>Address:</p>
          <p className={address.addressP}>
            {userAddress.address} {userAddress.country} {userAddress.city}
            {userAddress.area} {userAddress.zip_code} {userAddress.phone_number}
          </p>
        </div>
      </div>
    </div>
  );
}
