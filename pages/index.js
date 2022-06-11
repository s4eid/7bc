import Nav from "../Layouts/Nav/Nav";
import HomePage from "../components/HomePage/HomePage";
import Footer from "../Layouts/Footer/Footer";
import Head from "next/head";
import { initializeApollo } from "../apolloConfig/apollo";
import { GET_HOME_PRODUCTS } from "../graphql_f/product/Query/getHomeProducts";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading } = useQuery(GET_HOME_PRODUCTS, {
    fetchPolicy: "cache-first",
  });
  return (
    <>
      <Head>
        <title>Carpet & Rug Store Antique Collection - arisoyhandicraft</title>
        <meta
          name="description"
          content="Big Collection Of Handmade Carpets & Machine Made Carpets For Every Budget & Free Shipping To Your Country For Your Home,Office...In Any Size & Shape"
        ></meta>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="keywords"
          content="carpet,rug,kilim,handmade,handicraft,iran carpet,turkey carpet,online store,free shipping"
        ></meta>
      </Head>
      <HomePage products={data.getHomeProducts} />
    </>
  );
}
export async function getStaticProps() {
  const client = initializeApollo();
  await client.query({
    query: GET_HOME_PRODUCTS,
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    // revalidate: 10,
  };
}

Home.Nav = Nav;
Home.Footer = Footer;
