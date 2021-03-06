import React,{useState} from "react";
import ourLeathers from "./ourLeathers.module.css";
import Leather from "./Leather";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "../../../Layouts/Loading";
export default function OurLeathers({ products, pageInfo, refetch, filter }) {
  const [loading,setLoading]=useState(false);
  const getMore = (afterCursor, hasMore) => {
    if (hasMore) {
      refetch({
        variables: {
          type: "leather",
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
      }).then(()=>{setLoading(false)})
    }
  };
  return (
    <div className={ourLeathers.container}>
      <div
        // dataLength={products.length}
        // next={() => getMore(pageInfo.startCursor, pageInfo.hasNextPage)}
        className={ourLeathers.productsHolder}
        // hasMore={pageInfo.hasNextPage}
        // loader={<Loading />}
        // scrollableTarget="scrollableDiv"
      >
        <div className={ourLeathers.productMainContainer}>
          {products.map((carpet, index) => (
            <Leather c={carpet} key={index} />
          ))}
        </div>
       {pageInfo.hasNextPage && !loading? 
       <button className={ourLeathers.moreBtn} onClick={()=>{
        setLoading(true)
        getMore(pageInfo.startCursor, pageInfo.hasNextPage)
       }
      }>Load More</button>
       :loading?
              <button disabled={true} className={ourLeathers.button}>
                    <span className={ourLeathers.buttonLoading}> </span>
                  </button>
       :<></>}
       </div>
    </div>
  );
}
