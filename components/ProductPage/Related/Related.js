import React from "react";
import related from "./related.module.css";
import Product from "../../ProductsPage/Products/Product";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLazyQuery } from "@apollo/client";
import { GET_NOT_ONE_PRODUCT } from "../../../graphql_f/product/Query/getNotOneProduct";
import Loading from "../../../Layouts/Loading";

export default function Related({ product_id, type }) {
  const [moreProduct, { data, loading, error }] = useLazyQuery(
    GET_NOT_ONE_PRODUCT
    // {
    //   fetchPolicy: "network-only",
    // }
  );
  const getMore = () => {
    moreProduct({
      variables: {
        product_id: product_id,
      },
    });
  };
  return (
    <div className={related.mainContainer}>
      <InfiniteScroll
        dataLength={3}
        next={() => getMore()}
        className={related.productsHolder}
        hasMore={!data}
        loader={<Loading />}
        scrollableTarget="scrollableDiv"
      >
        <div className={related.title}>
          <h1>Related Products</h1>
        </div>
        <div className={related.mainRelateHolder}>
          {data?.notOneProduct.map((c, index) => (
            <Product type={type} c={c} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
