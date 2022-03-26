import React from "react";
import Address from "./Address/Address";
import addresses from "./addresses.module.css";
import { useRouter } from "next/router";

export default function AddressesPage({ userAddress }) {
  const router = useRouter();
  return (
    <>
      {userAddress ? (
        <div className={addresses.mainContainer}>
          <Address userAddress={userAddress} />
          <div className={addresses.editC}>
            <button className={addresses.editBtn}>Edit Address</button>
          </div>
        </div>
      ) : (
        <div className={addresses.mainContainer}>
          <p>You have not add your address yet</p>
          <div className={addresses.editC}>
            <button
              className={addresses.editBtn}
              onClick={() => router.push("/account/addAddress")}
            >
              Add Address
            </button>
          </div>
        </div>
      )}
    </>
  );
}
