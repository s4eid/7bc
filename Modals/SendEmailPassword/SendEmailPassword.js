import React from "react";
import sendEmailPassword from "./sendEmailPassword.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SendEmailPassword({ openM, setOpenM }) {
  const router = useRouter();
  if (!openM) return null;
  return (
    <div className={sendEmailPassword.overlay}>
      <div className={sendEmailPassword.mainContainer}>
        <div className={sendEmailPassword.holder}>
          <p>We just send an email to</p>
          <Link href={"https://mail.google.com"}>
            <p className={sendEmailPassword.email}>{openM}</p>
          </Link>
          <p>To reset your password check your inbox!</p>
          <button
            className={sendEmailPassword.holderBtn}
            onClick={() => router.push("/")}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
