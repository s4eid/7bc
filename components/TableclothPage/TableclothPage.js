import React from "react";
import Filter from "./Filter/Filter";
import tableclothPage from "./tableclothPage.module.css";
import OurTablecloth from "./Tablecloth/OurTablecloth";

export default function TableclothPage({
  products,
  pageInfo,
  refetch,
  filter,
  setFilter,
}) {
  return (
    <div className={tableclothPage.mainContainer}>
      <Filter
        _filter={filter}
        index={products.length}
        setFilter={setFilter}
        refetch={refetch}
      />
      <OurTablecloth
        products={products}
        filter={filter}
        pageInfo={pageInfo}
        refetch={refetch}
      />
    </div>
  );
}
