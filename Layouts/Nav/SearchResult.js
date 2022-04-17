import React, { useEffect } from "react";
import search from "./searchResult.module.css";
import { useRouter } from "next/router";

export default function SearchResult({ data }) {
  const router = useRouter();
  return (
    <div className={search.mainHolder}>
      {data?.map((d, index) => {
        return (
          <p
            onClick={() => router.push(`/${d.type}s/${d.product_id}`)}
            className={search.items}
            key={index}
          >
            {d.name} {d.type} {d.made}
          </p>
        );
      })}
    </div>
  );
}
