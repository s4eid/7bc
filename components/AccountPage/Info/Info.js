import React from "react";
import info from "./info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import signOut from "../../../Functions/signOut/signOut";
import {
  faUserMinus,
  faMobile,
  faAt,
  faEdit,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../Redux/Actions/User/user";

export default function Info({ user }) {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className={info.mainC}>
      <div className={info.infoHolders}>
        <FontAwesomeIcon icon={faUserMinus} className={info.icon} />
        <p className={info.nameTitle}>{user?.name}</p>
      </div>
      <div className={info.infoHolders}>
        <FontAwesomeIcon icon={faAt} className={info.icon} />
        <p className={info.emailTitle}>{user?.email}</p>
      </div>
      {/* <div className={info.infoHoldersPhone}>
        <FontAwesomeIcon icon={faMobile} className={info.icon} />
        <p className={info.phoneTitle}>{user?.phone_number}</p>
      </div> */}
      <div className={info.changeContainer}>
        <FontAwesomeIcon icon={faEdit} className={info.icon} />
      </div>
      <div className={info.signOutContainer}>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          onClick={() => dispatch(logoutUser(router))}
          className={info.iconOut}
        />
      </div>
    </div>
  );
}
