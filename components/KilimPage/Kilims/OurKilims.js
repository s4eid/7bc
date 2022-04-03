import React from "react";
import ourKilims from "./ourKilims.module.css";
import Kilim from "./Kilim";
import InfiniteScroll from "react-infinite-scroll-component";
export default function OurKilims({ products, pageInfo, refetch }) {
  const getMore = (afterCursor, hasMore) => {
    if (hasMore) {
      refetch({
        variables: {
          type: "kilim",
          afterCursor: afterCursor,
          first: 5,
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
    <div className={ourKilims.container}>
      <InfiniteScroll
        dataLength={products.length}
        next={() => getMore(pageInfo.startCursor, pageInfo.hasNextPage)}
        className={ourKilims.productsHolder}
        hasMore={pageInfo.hasNextPage}
        loader={<p>Loading...</p>}
        scrollableTarget="scrollableDiv"
      >
        <div className={ourKilims.productMainContainer}>
          {products.map((carpet, index) => (
            <Kilim c={carpet} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
