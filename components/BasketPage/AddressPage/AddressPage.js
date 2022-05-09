import React, { useState } from "react";
import addressC from "./address.module.css";
import Map from "./Map/Map";
import AddressForm from "./AddressForm/AddressForm";
import { useRouter } from "next/router";
import ExistAddress from "./ExistAddress/ExistAddress";

export default function AddressPage({ addressInfo, ip, userId }) {
  const [address, setAddress] = useState({});
  const [has, setHas] = useState(addressInfo ? true : false);
  const router = useRouter();
  return (
    <div className={addressC.mainContainer}>
      {!has ? (
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
              <AddressForm
                ip={ip}
                addressInfo={addressInfo}
                address={{ address }}
                userId={userId}
              />
            </>
          )}
        </div>
      ) : (
        <div className={addressC.existAddressC}>
          <ExistAddress userAddress={addressInfo} />
          <button
            className={addressC.existAB}
            onClick={() => router.push("/basket/payment")}
          >
            Use This Address
          </button>
          <button
            className={addressC.existAB}
            onClick={() => setHas(() => has == false)}
          >
            Edit Address
          </button>
        </div>
      )}
    </div>
  );
}
