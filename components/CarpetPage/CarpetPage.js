import React from "react";
import OurCarpets from "./Carpets/OurCarpets";
import Filter from "./Filter/Filter";

export default function CarpetPage({ products, pageInfo, refetch }) {
  return (
    <>
      <Filter index={products.length} />
      <OurCarpets products={products} pageInfo={pageInfo} refetch={refetch} />
    </>
  );
}
