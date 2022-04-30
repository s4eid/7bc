import React from "react";
import related from "./related.module.css";
import { carpetsItems } from "../../../data/carpetsItems";
import Carpet from "../../CarpetPage/Carpets/Carpet";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLazyQuery } from "@apollo/client";
import { GET_NOT_ONE_PRODUCT } from "../../../graphql_f/product/Query/getNotOneProduct";
import Loading from "../../../Layouts/Loading";

export default function Related({ product_id }) {
  const [moreProduct, { data, loading, error }] =
    useLazyQuery(GET_NOT_ONE_PRODUCT);
  const getMore = () => {
    moreProduct({
      variables: {
        product_id: product_id,
      },
    });
    console.log(data);
  };
  console.log(data);
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
          <p>Related Products</p>
        </div>
        <div className={related.mainRelateHolder}>
          {data?.notOneProduct.map((c, index) => (
            <Carpet c={c} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
