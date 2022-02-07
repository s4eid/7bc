import React from "react";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import AddressesPage from "../../../components/AccountPage/AddressesPage/AddressesPage";
import DashboardS from "../../../Layouts/Dashboard/DashboardS";

export default function Addresses() {
  return <AddressesPage />;
}

Addresses.Nav = Nav;
Addresses.Footer = Footer;
Addresses.DashboardS = DashboardS;
