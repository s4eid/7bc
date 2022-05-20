import React from "react";
import { signIn } from "next-auth/react";
import signInGoogle from "./signInGoogle.module.css";

export default function SignInGoogle() {
  return (
    <div className={signInGoogle.googleBtn} onClick={() => signIn("google")}>
      <div className={signInGoogle.googleIconWrapper}>
        <img
          className={signInGoogle.googleIcon}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p className={signInGoogle.btnText}>
        <b>Sign in with google</b>
      </p>
    </div>
  );
}
