import React, { useEffect } from "react";
import KilimPage from "../../components/KilimPage/KilimPage.js";
import Footer from "../../Layouts/Footer/Footer.js";
import Nav from "../../Layouts/Nav/Nav.js";
import { initializeApollo } from "../../apolloConfig/apollo";
import { getProduct_k } from "../../Redux/Actions/Product_k";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

export default function Kilim() {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.products_k);
  const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-first",
    variables: { type: "kilim", first: 4 },
  });
  useEffect(() => {
    if (data?.products.edges.node) {
      dispatch(getProduct_k(data.products.edges.node, data.products.pageInfo));
    }
  }, [data]);
  return (
    <>
      {!products.loading && !loading ? (
        <KilimPage
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
    variables: { type: "kilim", first: 4 },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 10,
  };
}

Kilim.Nav = Nav;
Kilim.Footer = Footer;
