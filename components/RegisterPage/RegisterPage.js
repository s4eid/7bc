import React from "react";
import Register from "./Register/Register";
import register from "./register.module.css";
import SignInGoogle from "../SignInGoogle/SignInGoogle";

export default function RegisterPage() {
  return (
    <div className={register.pageHolder}>
      <Register />
      <p className={register.orTitle}>Or</p>
      <SignInGoogle />
    </div>
  );
}
