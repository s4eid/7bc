import React from "react";
import account from "./account.module.css";
import Info from "./Info/Info";
import Navigation from "./Navigation/Navigation";

export default function AccountPage() {
  return (
    <div className={account.mainContainer}>
      <div className={account.container}>
        <div className={account.holder}>
          <Navigation />
          <Info />
        </div>
      </div>
    </div>
  );
}
