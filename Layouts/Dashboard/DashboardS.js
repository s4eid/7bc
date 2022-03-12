import React from "react";
import dashboard from "./dashboardS.module.css";
import { useRouter } from "next/router";
import Info from "./Info/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Navigation from "./Navigation/Navigation";

export default function Dashboard({ children }) {
  const { user } = useSelector((state) => state);
  const router = useRouter();
  return (
    <div className={dashboard.mainContainer}>
      <div className={dashboard.container}>
        <div className={dashboard.holder}>
          <div className={dashboard.navInfoC}>
            <Info user={user} />
            <Navigation />
          </div>
          {children}
          <div
            className={dashboard.goBackC}
            onClick={() => router.push("/account")}
          >
            <div className={dashboard.backContainer}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <p>Go Back To Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
