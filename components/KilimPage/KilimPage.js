import React from "react";
import OurKilims from "./Kilims/OurKilims";
import Filter from "./Filter/Filter";
import kilimPage from "./kilimPage.module.css";

export default function KilimPage({ products, pageInfo, refetch }) {
  return (
    <div className={kilimPage.mainContainer}>
      <Filter index={products.length} />
      <OurKilims products={products} pageInfo={pageInfo} refetch={refetch} />
    </div>
  );
}
