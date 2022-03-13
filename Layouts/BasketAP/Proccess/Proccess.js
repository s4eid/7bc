import React from "react";
import proccess from "./proccess.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faMapMarkedAlt,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
export default function Proccess() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className={proccess.proccessContainer}>
      <div
        onClick={() => router.push("/basket")}
        className={proccess.proccessHolderS}
      >
        <FontAwesomeIcon icon={faBox} className={proccess.icon} />
        <p>Basket</p>
      </div>
      <div
        className={
          path !== "/basket/address" && path !== "/basket/payment"
            ? proccess.proccessHolder
            : proccess.proccessHolderS
        }
        onClick={() => router.push("/basket/address")}
      >
        <FontAwesomeIcon icon={faMapMarkedAlt} className={proccess.icon} />
        <p>Address</p>
      </div>
      <div
        className={
          path !== "/basket/payment"
            ? proccess.proccessHolder
            : proccess.proccessHolderS
        }
      >
        <FontAwesomeIcon icon={faMoneyCheckAlt} className={proccess.icon} />
        <p>Payment</p>
      </div>
      <div className={proccess.lineC}>
        <hr className={proccess.line}></hr>
        <hr
          className={
            path !== "/basket/payment" ? proccess.lineS : proccess.line
          }
        ></hr>
      </div>
    </div>
  );
}
