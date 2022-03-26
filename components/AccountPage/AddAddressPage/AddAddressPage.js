import React, { useState } from "react";
import addressC from "./addAddress.module.css";
import Map from "./Map/Map";
import AddressForm from "./AddressForm/AddressForm";

export default function AddAddressPage({ userId }) {
  const [address, setAddress] = useState({});
  return (
    <div className={addressC.mainContainer}>
      <div className={addressC.mapHolder}>
        {!address.country ? (
          <>
            <div className={addressC.title}>
              <p>Search Your Address</p>
            </div>
            <Map setAddress={setAddress} />
          </>
        ) : (
          <>
            <div className={addressC.title}>
              <p>Complate Your Address</p>
            </div>
            <AddressForm address={{ address }} userId={userId} />
          </>
        )}
      </div>
    </div>
  );
}
