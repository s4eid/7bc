import React from "react";
import payment from "./paymentPage.module.css";
import PaymentForm from "./PaymentForm/PaymentForm";
export default function PaymentPage() {
  return (
    <div className={payment.mainContainer}>
      <PaymentForm />
    </div>
  );
}
