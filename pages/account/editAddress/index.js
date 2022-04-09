import React from "react";
import EditAddressPage from "../../../components/AccountPage/EditAddressPage/EditAddressPage";
import Nav from "../../../Layouts/Nav/Nav";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_USER_ADDRESS } from "../../../graphql_f/users/Query/getUserAddress";
import Footer from "../../../Layouts/Footer/Footer";

export default function EditAddress() {
  const user = useSelector((state) => state.user);
  const { data, error, loading } = useQuery(GET_USER_ADDRESS, {
    variables: {
      userId: user.user_id,
    },
    nextFetchPolicy: "network-only",
  });

  return (
    <>
      {!loading ? (
        <EditAddressPage userId={user.user_id} address={data.getUserAddress} />
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

EditAddress.Nav = Nav;
EditAddress.Footer = Footer;
