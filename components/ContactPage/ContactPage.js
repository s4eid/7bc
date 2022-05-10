import React from "react";
import contact from "./contact.module.css";
import ContactInfo from "./ContactInfo/ContactInfo";
import SendMessage from "./SendMessage/SendMessage";

export default function ContactPage() {
  return (
    <div className={contact.mainContainer}>
      <h1 className={contact.title}>Get In Touch</h1>
      <ContactInfo />
      <SendMessage />
    </div>
  );
}
