import React from "react";
import search from "./searchResult.module.css";

export default function SearchResult({ data }) {
  return (
    <div className={search.mainHolder}>
      {data?.map((d, index) => {
        return (
          <p className={search.items} key={index}>
            {d.name}
          </p>
        );
      })}
    </div>
  );
}
