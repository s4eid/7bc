import React from "react";
import Register from "./Register/Register";
import register from "./register.module.css";

export default function RegisterPage() {
  return (
    <div className={register.pageHolder}>
      <Register />
    </div>
  );
}
