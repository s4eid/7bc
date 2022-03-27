import React from "react";
import ourCarpets from "./ourCarpets.module.css";
import Carpet from "./Carpet";
import InfiniteScroll from "react-infinite-scroll-component";
export default function OurCarpets({ products, pageInfo, refetch }) {
  const getMore = (afterCursor, hasMore) => {
    console.log(afterCursor);
    if (hasMore) {
      refetch({
        variables: {
          type: "carpet",
          afterCursor: afterCursor,
          first: 100,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult.products.edges.node = [
            ...prevResult.products.edges.node,
            ...fetchMoreResult.products.edges.node,
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
        loader={<h4>Loading...</h4>}
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
