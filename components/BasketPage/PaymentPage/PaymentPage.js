import React from "react";
import payment from "./paymentPage.module.css";
import PaymentForm from "./PaymentForm/PaymentForm";
export default function PaymentPage() {
  return (
    <div className={payment.mainContainer}>
      <div>
        <div className={payment.title}>
          <p>Payment information</p>
        </div>
        <PaymentForm />
      </div>
    </div>
  );
}
