import React from "react";
import Login from "./Login/Login";
import { useSession, signIn, signOut } from "next-auth/react";
import login from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={login.pageHolder}>
      <Login />
      <div className={login.googleBtn} onClick={() => signIn("google")}>
        <div className={login.googleIconWrapper}>
          <img
            className={login.googleIcon}
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p className={login.btnText}>
          <b>Sign in with google</b>
        </p>
      </div>
    </div>
  );
}
