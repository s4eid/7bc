import React from "react";
import CarpetPage from "../../components/CarpetPage/CarpetPage.js";
import Footer from "../../Layouts/Footer/Footer.js";
import Nav from "../../Layouts/Nav/Nav.js";
import { initializeApollo } from "../../apolloConfig/apollo";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import { useQuery } from "@apollo/client";

export default function Carpet() {
  const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-first",
    variables: { type: "carpet", first: 500 },
  });
  return (
    <>
      {!loading ? (
        <CarpetPage
          products={data.products.edges.node}
          pageInfo={data.products.pageInfo}
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
    variables: { type: "carpet", first: 500 },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

Carpet.Nav = Nav;
Carpet.Footer = Footer;
