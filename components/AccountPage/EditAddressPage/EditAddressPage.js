import React from "react";
import addressC from "./editAddress.module.css";
import AddressForm from "./AddressForm/AddressForm";

export default function EditAddressPage({ ip, userId, address }) {
  return (
    <div className={addressC.mainContainer}>
      <div className={addressC.title}>
        <h1>Edit Your Address</h1>
      </div>
      <AddressForm address={address} ip={ip} userId={userId} />
    </div>
  );
}
