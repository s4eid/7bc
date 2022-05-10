import React from "react";
import SendForm from "./SendForm";
import sendMessage from "./sendMessage.module.css";

export default function SendMessage() {
  return (
    <div className={sendMessage.mainC}>
      <h1 className={sendMessage.title}>SendMessage</h1>
      <SendForm />
    </div>
  );
}
