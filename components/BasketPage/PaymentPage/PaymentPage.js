import React from "react";
import payment from "./paymentPage.module.css";
import PaymentForm from "./PaymentForm/PaymentForm";
export default function PaymentPage({ info, user, product }) {
  console.log(info);
  console.log(product);
  return (
    <div className={payment.mainContainer}>
      <div>
        <div className={payment.title}>
          <p>Payment information</p>
        </div>
        <PaymentForm product={product} user={user} info={info} />
      </div>
    </div>
  );
}
