import React, { useState } from "react";
import addressC from "./address.module.css";
import Map from "./Map/Map";
import AddressForm from "./AddressForm/AddressForm";

export default function AddressPage() {
  const [address, setAddress] = useState({});
  console.log(address);
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
            <AddressForm address={{ address }} />
          </>
        )}
      </div>
    </div>
  );
}
