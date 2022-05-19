import React from "react";
import OurKilims from "./Kilims/OurKilims";
import Filter from "./Filter/Filter";
import kilimPage from "./kilimPage.module.css";

export default function KilimPage({
  products,
  pageInfo,
  refetch,
  filter,
  setFilter,
}) {
  return (
    <div className={kilimPage.mainContainer}>
      <Filter
        _filter={filter}
        index={products.length}
        setFilter={setFilter}
        refetch={refetch}
      />
      <OurKilims
        products={products}
        filter={filter}
        pageInfo={pageInfo}
        refetch={refetch}
      />
    </div>
  );
}
