import Nav from "../Layouts/Nav/Nav";
import HomePage from "../components/HomePage/HomePage";
import Footer from "../Layouts/Footer/Footer";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

Home.Nav = Nav;
Home.Footer = Footer;
