import React from "react";
import ourTablecloth from "./ourTablecloth.module.css";
import Tablecloth from "./Tablecloth";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "../../../Layouts/Loading";
export default function OurTablecloth({ products, pageInfo, refetch, filter }) {
  const getMore = (afterCursor, hasMore) => {
    if (hasMore) {
      refetch({
        variables: {
          type: "tablecloth",
          price: filter.price ? filter.price : null,
          made: filter.made ? filter.made : null,
          origin: filter.origin ? filter.origin : null,
          afterCursor: afterCursor,
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
    <div className={ourTablecloth.container}>
      <div
        // dataLength={products.length}
        // next={() => getMore(pageInfo.startCursor, pageInfo.hasNextPage)}
        className={ourTablecloth.productsHolder}
        // hasMore={pageInfo.hasNextPage}
        // loader={<Loading />}
        // scrollableTarget="scrollableDiv"
      >
        <div className={ourTablecloth.productMainContainer}>
          {products.map((carpet, index) => (
            <Tablecloth c={carpet} key={index} />
          ))}
        </div>
       {pageInfo.hasNextPage? <button className={ourTablecloth.moreBtn} onClick={()=>getMore(pageInfo.startCursor, pageInfo.hasNextPage)}>Load More</button>:<></>}
       </div>
    </div>
  );
}
