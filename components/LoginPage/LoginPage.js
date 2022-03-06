import React from "react";
import Login from "./Login/Login";
import login from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={login.pageHolder}>
      <Login />
    </div>
  );
}
