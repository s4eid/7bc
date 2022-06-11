import React from "react";
import ContactPage from "../../components/ContactPage/ContactPage";
import Footer from "../../Layouts/Footer/Footer";
import Nav from "../../Layouts/Nav/Nav";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us We Will Be Happy To Help - arisoyhandicraft</title>
        {/* <meta
          name="description"
          content="Over 1000 Collection Of Kilims We Will Make Your Place Royal For Every Budget Fast And Free Shipping  To Your Country  In Any Size & Shape"
        ></meta> */}
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
      <ContactPage />
    </>
  );
}

Contact.Nav = Nav;
Contact.Footer = Footer;
