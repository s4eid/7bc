import React, { useEffect, useState } from "react";
import nav from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SEARCH_PRODUCT } from "../../graphql_f/product/Query/searchProduct";
import { useLazyQuery } from "@apollo/client";
import SearchResult from "./SearchResult";
import {
  faSearch,
  faSlash,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function NavButtom() {
  const [text, setText] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchP, { data, loading }] = useLazyQuery(SEARCH_PRODUCT);
  const router = useRouter();
  useEffect(() => {
    setText("");
  }, [router]);
  return (
    <>
      <div className={nav.navBottomContainer}>
        {!searchOpen ? (
          <div className={nav.logoContainer}>
            <Link href="/">
              <Image
                alt="logo"
                loading="eager"
                className={nav.logo}
                src="/logo.svg"
                layout="intrinsic"
                width={50}
                height={50}
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
        <div
          className={!searchOpen ? nav.searchContainerN : nav.searchContainer}
        >
          <input
            type="text"
            value={text}
            enterKeyHint="done"
            placeholder="name/type/made"
            onChange={(e) => {
              setText(e.target.value);
              searchP({ variables: { text: e.target.value } });
            }}
            className={nav.searchInputOpenN}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className={nav.searchIconOpenOne}
            onClick={() => {
              searchP({ variables: { text: text } });
            }}
          />
          <FontAwesomeIcon
            icon={faSlash}
            onClick={() => setSearchOpen(!searchOpen)}
            className={searchOpen ? nav.closeSearchBox : nav.notDisplay}
          />
          <input
            type="text"
            value={text}
            enterKeyHint="done"
            placeholder="name type made"
            onChange={(e) => {
              setText(e.target.value);
            }}
            className={searchOpen ? nav.searchInputOpen : nav.searchInputClose}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className={nav.searchIcon}
            onClick={() => {
              if (searchOpen) {
                searchP({ variables: { text: text } });
              } else {
                setSearchOpen(!searchOpen);
              }
            }}
          />
        </div>
        {!searchOpen ? (
          <Link href="/basket">
            <div className={nav.bascketContainer}>
              <div className={nav.bascket}>
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className={nav.bascketIcon}
                />
              </div>
            </div>
          </Link>
        ) : (
          <></>
        )}
      </div>
      {data && !loading && text ? (
        <SearchResult data={data.searchProduct} />
      ) : (
        <></>
      )}
    </>
  );
}
