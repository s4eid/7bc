import React from "react";
import Address from "./Address/Address";
import addresses from "./addresses.module.css";

export default function AddressesPage() {
  return (
    <div className={addresses.mainContainer}>
      <Address />
    </div>
  );
}
