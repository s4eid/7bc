import React from "react";
import CarpetPage from "../../components/CarpetPage/CarpetPage.js";
import Footer from "../../Layouts/Footer/Footer.js";
import Nav from "../../Layouts/Nav/Nav.js";
import { initializeApollo } from "../../apolloConfig/apollo";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import { useQuery } from "@apollo/client";

export default function Carpet() {
  const { data, loading } = useQuery(GET_PRODUCTS, {
    variables: { type: "carpet" },
  });
  return (
    <>
      <CarpetPage products={data.products} />
    </>
  );
}
export async function getServerSideProps() {
  const client = initializeApollo();
  await client.query({
    query: GET_PRODUCTS,
    variables: { type: "carpet" },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

Carpet.Nav = Nav;
Carpet.Footer = Footer;
