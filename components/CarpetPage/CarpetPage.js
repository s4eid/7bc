import React, { useState } from "react";
import OurCarpets from "./Carpets/OurCarpets";
import Filter from "./Filter/Filter";
import carpetPage from "./carpetPage.module.css";

export default function CarpetPage({
  products,
  pageInfo,
  refetch,
  filter,
  setFilter,
  loading,
}) {
  return (
    <div className={carpetPage.mainContainer}>
      <Filter
        _filter={filter}
        index={products.length}
        setFilter={setFilter}
        refetch={refetch}
      />
      <OurCarpets
        products={products}
        pageInfo={pageInfo}
        loading={loading}
        filter={filter}
        refetch={refetch}
      />
    </div>
  );
}
