import React from "react";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { useQuery } from "@apollo/client";
import AddressesPage from "../../../components/AccountPage/AddressesPage/AddressesPage";
import { GET_USER_ADDRESS } from "../../../graphql_f/users/Query/getUserAddress";
import DashboardS from "../../../Layouts/Dashboard/DashboardS";
import { useSelector } from "react-redux";

export default function Addresses() {
  const user = useSelector((d) => d.user);

  const { data, error, loading } = useQuery(GET_USER_ADDRESS, {
    variables: {
      userId: user.user_id,
    },
    fetchPolicy: "network-only",
  });
  console.log(data);
  return (
    <>
      {!loading ? (
        <AddressesPage userAddress={data.getUserAddress} />
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

Addresses.Nav = Nav;
Addresses.Footer = Footer;
Addresses.DashboardS = DashboardS;
