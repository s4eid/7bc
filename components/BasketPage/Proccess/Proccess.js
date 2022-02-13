import React from "react";
import proccess from "./proccess.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faBox,
  faMapMarkedAlt,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
export default function Proccess() {
  const route = useRouter();
  return (
    <div className={proccess.proccessContainer}>
      <div
        onClick={
          route.pathname !== "/basket" ? () => route.push("/basket") : null
        }
        className={proccess.proccessHolderS}
      >
        <FontAwesomeIcon icon={faBox} className={proccess.icon} />
        <p>Basket</p>
      </div>
      <div
        onClick={() => route.push("/basket/address")}
        className={proccess.proccessHolder}
      >
        <FontAwesomeIcon icon={faMapMarkedAlt} className={proccess.icon} />
        <p>Address</p>
      </div>
      <div className={proccess.proccessHolder}>
        <FontAwesomeIcon icon={faMoneyCheckAlt} className={proccess.icon} />
        <p>Payment</p>
      </div>
      <div className={proccess.lineC}>
        <hr className={proccess.line}></hr>
        <hr className={proccess.lineS}></hr>
      </div>
    </div>
  );
}
