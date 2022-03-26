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
    variables: { first: 5 },
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

Carpet.Nav = Nav;
Carpet.Footer = Footer;
