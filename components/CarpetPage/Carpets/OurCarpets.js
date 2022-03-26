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
      // getProducts({ variables: { afterCursor: afterCursor, first: 1 } });
    }
  };
  return (
    <div className={ourCarpets.container}>
      <InfiniteScroll
        dataLength={products.length}
        next={() => getMore(pageInfo.startCursor, pageInfo.hasNextPage)}
        // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
        // inverse={true} //
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
