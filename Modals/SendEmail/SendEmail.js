import React from "react";
import sendEmail from "./sendEmail.module.css";
import { useRouter } from "next/router";

export default function SendEmail({ openM, setOpenM }) {
  const router = useRouter();
  if (!openM) return null;
  return (
    <div className={sendEmail.overlay}>
      <div className={sendEmail.mainContainer}>
        <div className={sendEmail.holder}>
          <p>We just send an email to</p>
          <p className={sendEmail.email}>{openM}</p>
          <p>for veifiying your account check your inbox!</p>
          <button
            className={sendEmail.holderBtn}
            onClick={() => router.push("/")}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
