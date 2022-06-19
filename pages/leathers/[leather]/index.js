import React from "react";
import ProductPage from "../../../components/ProductPage/ProductPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../../apolloConfig/apollo";
import Loading from "../../../Layouts/Loading";
import { GET_PRODUCT } from "../../../graphql_f/product/Query/getOneProduct";
import { GET_PRODUCTS } from "../../../graphql_f/product/Query/getProduct";

export default function Product() {
  const router = useRouter();
  const route = router.query.leather;
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { product_id: route },
  });
  return (
    <>
      {!loading ? (
        <ProductPage type="leather" product={data.product} />
      ) : (
        <Loading />
      )}
    </>
  );
}
export async function getStaticPaths() {
  const client = initializeApollo();
  const data = await client.query({
    query: GET_PRODUCTS,
    variables: { type: "leather", first: 100 },
  });
  const paths = data.data.products.edges.node.map((p) => {
    return {
      params: { leather: p.product_id },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const product_id = params.leather;
  const client = initializeApollo();
  await client.query({
    query: GET_PRODUCT,
    variables: { product_id },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 10,
  };
}

Product.Nav = Nav;
Product.Footer = Footer;
