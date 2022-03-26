import React from "react";
import AddAddressPage from "../../../components/AccountPage/AddAddressPage/AddAddressPage";
import Nav from "../../../Layouts/Nav/Nav";
import { useSelector } from "react-redux";
import Footer from "../../../Layouts/Footer/Footer";

export default function AddAddress() {
  const user = useSelector((state) => state.user);

  return <AddAddressPage userId={user.user_id} />;
}

AddAddress.Nav = Nav;
AddAddress.Footer = Footer;
