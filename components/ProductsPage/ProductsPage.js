import React from "react";
import OurProducts from "./Products/OurProducts";
import Filter from "./Filter/Filter";
import productsPage from "./productsPage.module.css";

export default function ProductPage({
  products,
  pageInfo,
  refetch,
  filter,
  type,
  setFilter,
  loading,
}) {
  return (
    <div className={productsPage.mainContainer}>
      <Filter
        _filter={filter}
        index={products.length}
        setFilter={setFilter}
        type={type}
        refetch={refetch}
      />
      <OurProducts
        products={products}
        pageInfo={pageInfo}
        loading={loading}
        filter={filter}
        type={type}
        refetch={refetch}
      />
    </div>
  );
}
