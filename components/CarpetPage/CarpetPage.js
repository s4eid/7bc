import React from "react";
import OurCarpets from "./Carpets/OurCarpets";
import Filter from "./Filter/Filter";
import carpetPage from "./carpetPage.module.css";

export default function CarpetPage({ products, pageInfo, refetch }) {
  return (
    <div className={carpetPage.mainContainer}>
      <Filter index={products.length} />
      <OurCarpets products={products} pageInfo={pageInfo} refetch={refetch} />
    </div>
  );
}
