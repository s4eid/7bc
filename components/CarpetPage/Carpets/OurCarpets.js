import React, { useState } from "react";
import ourCarpets from "./ourCarpets.module.css";
import Carpet from "./Carpet";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../Layouts/Loading";
export default function OurCarpets({ products, pageInfo, refetch, filter }) {
  const [loading,setLoading]=useState(false);
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
      }).then(()=>{setLoading(false)})
    }
  };
  return (
    <div className={ourCarpets.container}>
      <div
        // dataLength={products.length}
        // next={() => getMore(pageInfo.startCursor, pageInfo.hasNextPage)}
        className={ourCarpets.productsHolder}
        // hasMore={pageInfo.hasNextPage}
        // loader={<Loading />}
        // scrollableTarget="scrollableDiv"
      >
        <div className={ourCarpets.productMainContainer}>
          {products.map((carpet, index) => (
            <Carpet c={carpet} key={index} />
          ))}
        </div>
       {pageInfo.hasNextPage&&!loading? <button className={ourCarpets.moreBtn} onClick={()=>{
        setLoading(true)
        getMore(pageInfo.startCursor, pageInfo.hasNextPage)
      }
      }>Load More</button>:
       loading?
              <button disabled={true} className={ourCarpets.button}>
                    <span className={ourCarpets.buttonLoading}> </span>
                  </button>
       :<></>}
      </div>
    </div>
  );
}
