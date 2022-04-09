import React from "react";
import address from "./address.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Address({ userAddress }) {
  return (
    <div className={address.mainContainer}>
      <div className={address.iconC}>
        <FontAwesomeIcon className={address.iconCIcon} icon={faMapMarkerAlt} />
        <p>Location</p>
      </div>
      <div className={address.mainHolder}>
        <div className={address.addressHolder}>
          <p className={address.main}>Address:</p>
          <p>{userAddress.address}</p>
        </div>
        <div className={address.addressHolder}>
          <p className={address.main}>Country:</p>
          <p>{userAddress.country}</p>
        </div>
        <div className={address.addressHolder}>
          <p className={address.main}>City:</p>
          <p>{userAddress.city}</p>
        </div>
        <div className={address.addressHolder}>
          <p className={address.main}>Area:</p>
          <p>{userAddress.area}</p>
        </div>
        <div className={address.addressHolder}>
          <p className={address.main}>Zip_code:</p>
          <p>{userAddress.zip_code}</p>
        </div>
      </div>
    </div>
  );
}
