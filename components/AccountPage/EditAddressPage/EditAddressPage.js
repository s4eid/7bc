import React from "react";
import addressC from "./editAddress.module.css";
import AddressForm from "./AddressForm/AddressForm";

export default function EditAddressPage({ userId, address }) {
  return (
    <div className={addressC.mainContainer}>
      <div className={addressC.title}>
        <p>Edit Your Address</p>
      </div>
      <AddressForm address={address} userId={userId} />
    </div>
  );
}
