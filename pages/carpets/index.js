import React, { useEffect, useState } from "react";
import CarpetPage from "../../components/CarpetPage/CarpetPage.js";
import Footer from "../../Layouts/Footer/Footer.js";
import Nav from "../../Layouts/Nav/Nav.js";
import Loading from "../../Layouts/Loading";
import { initializeApollo } from "../../apolloConfig/apollo";
import { getProduct, getProduct_filter } from "../../Redux/Actions/Products";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

export default function Carpet() {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.products);
  const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-first",
    // skip: products.products,
    variables: {
      type: "carpet",
      first: 4,
      made: null,
      origin: null,
      price: null,
    },
  });
  const [filter, setFilter] = useState({
    price: null,
    origin: null,
    made: null,
    action: false,
  });
  useEffect(() => {
    if (data?.products.edges.node) {
      console.log(filter.action);
      if (filter.action == true) {
        dispatch(
          getProduct_filter(data.products.edges.node, data.products.pageInfo)
        );
      } else if (filter.action == false) {
        dispatch(getProduct(data.products.edges.node, data.products.pageInfo));
      }
    }
  }, [data]);
  return (
    <>
      {!products.loading && !loading ? (
        <CarpetPage
          products={products.products}
          filter={filter}
          setFilter={setFilter}
          pageInfo={products.pageInfo}
          refetch={fetchMore}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
export async function getStaticProps({ req, res }) {
  const client = initializeApollo();
  await client.query({
    query: GET_PRODUCTS,
    variables: {
      type: "carpet",
      first: 4,
      made: null,
      origin: null,
      price: null,
    },
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
