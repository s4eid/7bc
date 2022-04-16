import React from "react";
import info from "./info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMinus,
  faMobile,
  faAt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

export default function Info({ user }) {
  return (
    <div className={info.mainC}>
      <div className={info.infoHolders}>
        <FontAwesomeIcon icon={faUserMinus} className={info.icon} />
        <p className={info.nameTitle}>{user.name}</p>
      </div>
      <div className={info.infoHolders}>
        <FontAwesomeIcon icon={faAt} className={info.icon} />
        <p className={info.emailTitle}>{user.email}</p>
      </div>
      <div className={info.changeContainer}>
        <FontAwesomeIcon icon={faEdit} className={info.icon} />
      </div>
    </div>
  );
}
