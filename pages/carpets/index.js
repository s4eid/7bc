import React, { useEffect } from "react";
import CarpetPage from "../../components/CarpetPage/CarpetPage.js";
import Footer from "../../Layouts/Footer/Footer.js";
import Nav from "../../Layouts/Nav/Nav.js";
import { initializeApollo } from "../../apolloConfig/apollo";
import { getProduct } from "../../Redux/Actions/Products";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

export default function Carpet() {
  const products = useSelector((s) => s.products);
  console.log(products);
  const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-first",
    variables: { type: "carpet", first: 5 },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(data.products.edges.node, data.products.pageInfo));
  }, [data]);
  console.log(products.loading);
  console.log(loading);
  return (
    <>
      {!products.loading && !loading ? (
        <CarpetPage
          products={products.products}
          pageInfo={products.pageInfo}
          refetch={fetchMore}
        />
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
export async function getStaticProps() {
  const client = initializeApollo();
  await client.query({
    query: GET_PRODUCTS,
    variables: { type: "carpet", first: 5 },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

Carpet.Nav = Nav;
Carpet.Footer = Footer;
