import React, { useState } from "react";
import addressC from "./addAddress.module.css";
import Map from "./Map/Map";
import AddressForm from "./AddressForm/AddressForm";

export default function AddAddressPage({ userId, ip }) {
  const [address, setAddress] = useState({});
  return (
    <div className={addressC.mainContainer}>
      <div className={addressC.mapHolder}>
        {!address.country ? (
          <>
            <div className={addressC.title}>
              <h1>Search Your Address</h1>
            </div>
            <Map setAddress={setAddress} />
          </>
        ) : (
          <>
            <div className={addressC.title}>
              <h1>Complate Your Address</h1>
            </div>
            <AddressForm ip={ip} address={{ address }} userId={userId} />
          </>
        )}
      </div>
    </div>
  );
}
