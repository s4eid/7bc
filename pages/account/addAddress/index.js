import React, { useEffect, useState } from "react";
import AddAddressPage from "../../../components/AccountPage/AddAddressPage/AddAddressPage";
import Nav from "../../../Layouts/Nav/Nav";
import { useSelector } from "react-redux";
import Footer from "../../../Layouts/Footer/Footer";
import { getSession } from "next-auth/react";

export default function AddAddress() {
  const [ip, setIp] = useState();
  useEffect(() => {
    fetch("https://api.ipify.org?format=json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, []);
  const user = useSelector((state) => state.user);

  return <AddAddressPage userId={user.user_id} ip={ip} />;
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!req.cookies.refreshToken && !session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
  // const token = req.cookies.refreshToken;
  // const user = await getUser_server(token, session?.user);
  // const client = await initializeApollo();
  // const { data } = await client.query({
  //   query: GET_USER_ADDRESS,
  //   variables: {
  //     user_id: user.user_id,
  //   },
  // });
  // if (data.getUserAddress) {
  //   return {
  //     redirect: {
  //       destination: "/account",
  //       permanent: false,
  //     },
  //   };
  // }
  // return {
  //   props: {
  //     initialApolloState: client.cache.extract(),
  //   },
  // };
}

AddAddress.Nav = Nav;
AddAddress.Footer = Footer;
