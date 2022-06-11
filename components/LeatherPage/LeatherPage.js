import React from "react";
import OurLeathers from "./Leathers/OurLeathers";
import Filter from "./Filter/Filter";
import leatherPage from "./leatherPage.module.css";

export default function LeatherPage({
  products,
  pageInfo,
  refetch,
  filter,
  setFilter,
}) {
  return (
    <div className={leatherPage.mainContainer}>
      <Filter
        _filter={filter}
        index={products.length}
        setFilter={setFilter}
        refetch={refetch}
      />
      <OurLeathers
        products={products}
        filter={filter}
        pageInfo={pageInfo}
        refetch={refetch}
      />
    </div>
  );
}
