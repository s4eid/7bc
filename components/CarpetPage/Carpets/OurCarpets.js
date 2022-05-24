import React from "react";
import ourCarpets from "./ourCarpets.module.css";
import Carpet from "./Carpet";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../Layouts/Loading";
export default function OurCarpets({ products, pageInfo, refetch, filter }) {
  const getMore = (afterCursor, hasMore) => {
    if (hasMore) {
      refetch({
        variables: {
          type: "carpet",
          afterCursor: afterCursor,
          price: filter.price ? filter.price : null,
          made: filter.made ? filter.made : null,
          origin: filter.origin ? filter.origin : null,
          first: 5,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult?.products?.edges?.node = [
            ...prevResult?.products?.edges?.node,
            ...fetchMoreResult?.products?.edges?.node,
          ];
          return fetchMoreResult;
        },
      });
    }
  };
  return (
    <div className={ourCarpets.container}>
      <InfiniteScroll
        dataLength={products.length}
        next={() => getMore(pageInfo.startCursor, pageInfo.hasNextPage)}
        className={ourCarpets.productsHolder}
        hasMore={pageInfo.hasNextPage}
        loader={<Loading />}
        scrollableTarget="scrollableDiv"
      >
        <div className={ourCarpets.productMainContainer}>
          {products.map((carpet, index) => (
            <Carpet c={carpet} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
