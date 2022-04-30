import React, { useEffect } from "react";
import CarpetPage from "../../components/CarpetPage/CarpetPage.js";
import Footer from "../../Layouts/Footer/Footer.js";
import Nav from "../../Layouts/Nav/Nav.js";
import Loading from "../../Layouts/Loading";
import { initializeApollo } from "../../apolloConfig/apollo";
import { getProduct } from "../../Redux/Actions/Products";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

export default function Carpet() {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.products);
  const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-first",
    variables: { type: "carpet", first: 4 },
  });
  // let notLoading = !loading ?? console.log(products);
  useEffect(() => {
    if (data?.products.edges.node) {
      dispatch(getProduct(data.products.edges.node, data.products.pageInfo));
    }
  }, [data]);
  return (
    <>
      {!products.loading && !loading ? (
        <CarpetPage
          products={products.products}
          pageInfo={products.pageInfo}
          refetch={fetchMore}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
export async function getStaticProps() {
  const client = initializeApollo();
  await client.query({
    query: GET_PRODUCTS,
    variables: { type: "carpet", first: 4 },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 10,
  };
}

Carpet.Nav = Nav;
Carpet.Footer = Footer;
