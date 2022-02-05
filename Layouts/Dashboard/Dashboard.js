import React from "react";
import dashboard from "./dashboard.module.css";
import Navigation from "./Navigation/Navigation";

export default function Dashboard({ children }) {
  return (
    <div className={dashboard.mainContainer}>
      <div className={dashboard.container}>
        <div className={dashboard.holder}>
          <Navigation />
          {children}
        </div>
      </div>
    </div>
  );
}
