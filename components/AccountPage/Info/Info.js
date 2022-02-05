import React from "react";
import info from "./info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMinus,
  faMobile,
  faAt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <div className={info.mainC}>
      <div className={info.infoHolders}>
        <FontAwesomeIcon icon={faUserMinus} className={info.icon} />
        <p className={info.nameTitle}>Saeid Noormohammad</p>
      </div>
      <div className={info.infoHolders}>
        <FontAwesomeIcon icon={faAt} className={info.icon} />
        <p className={info.emailTitle}>saeid.noormohammad@gmail.com</p>
      </div>
      <div className={info.infoHoldersPhone}>
        <FontAwesomeIcon icon={faMobile} className={info.icon} />
        <p className={info.phoneTitle}>05510193686</p>
      </div>
      <div className={info.changeContainer}>
        <FontAwesomeIcon icon={faEdit} className={info.icon} />
      </div>
    </div>
  );
}
