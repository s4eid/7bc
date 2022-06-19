import React, { useState } from "react";
import ourProducts from "./ourProducts.module.css";
import Product from "./Product";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "../../../Layouts/Loading";
export default function OurProducts({ products, pageInfo, refetch, filter,type }) {
  const [loading,setLoading]=useState(false);
  const getMore = (afterCursor, hasMore) => {
    if (hasMore) {
      refetch({
        variables: {
          type: type,
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
    <div className={ourProducts.container}>
      <div
        // dataLength={products.length}
        // next={() => getMore(pageInfo.startCursor, pageInfo.hasNextPage)}
        className={ourProducts.productsHolder}
        // hasMore={pageInfo.hasNextPage}
        // loader={<Loading />}
        // scrollableTarget="scrollableDiv"
      >
        <div className={ourProducts.productMainContainer}>
          {products.map((p, index) => (
            <Product c={p} key={index} type={type} />
          ))}
        </div>
       {pageInfo.hasNextPage&&!loading? <button className={ourProducts.moreBtn} onClick={()=>{
        setLoading(true)
        getMore(pageInfo.startCursor, pageInfo.hasNextPage)
      }
      }>Load More</button>:
       loading?
              <button disabled={true} className={ourProducts.button}>
                    <span className={ourProducts.buttonLoading}> </span>
                  </button>
       :<></>}
      </div>
    </div>
  );
}
