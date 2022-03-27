import React from "react";
import sendEmail from "./sendEmail.module.css";

export default function SendEmail({ openM, setOpenM }) {
  if (!openM) return null;
  return (
    <div className={sendEmail.overlay}>
      <div className={sendEmail.mainContainer}>
        <div className={sendEmail.holder}>
          <p>
            We just send an email to {openM} for veifiying your account check
            your inbox!
          </p>
          {/* <button className={sendEmail.holderBtn}>Send Email Again</button> */}
        </div>
      </div>
    </div>
  );
}
