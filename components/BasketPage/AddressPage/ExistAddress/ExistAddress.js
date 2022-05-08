import React from "react";
import address from "./existAddress.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ExistAddress({ userAddress }) {
  return (
    <div className={address.mainContainer}>
      <div className={address.iconC}>
        <FontAwesomeIcon className={address.iconCIcon} icon={faMapMarkerAlt} />
        <h1 className={address.title}>Location</h1>
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
          <p className={address.main}>Phone_number:</p>
          <p>{userAddress.phone_number}</p>
        </div>
        <div className={address.addressHolder}>
          <p className={address.main}>Zip_code:</p>
          <p>{userAddress.zip_code}</p>
        </div>
      </div>
    </div>
  );
}
