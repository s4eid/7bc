import Nav from "../Layouts/Nav/Nav";
import HomePage from "../components/HomePage/HomePage";
import Footer from "../Layouts/Footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carpet & Rug Store Antique Collection - arisoyhandicraft</title>
        <meta
          name="description"
          content="Big Collection Of Handmade Carpets & Machine Made Carpets For Every Budget & Free Shipping To Your Country For Your Home,Office...In Any Size & Shape"
        ></meta>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="keywords"
          content="carpet,rug,kilim,handmade,handicraft,iran carpet,turkey carpet,online store,free shipping"
        ></meta>
      </Head>
      <HomePage />
    </>
  );
}

Home.Nav = Nav;
Home.Footer = Footer;
