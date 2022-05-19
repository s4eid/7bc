import React from "react";
import filter from "./filter.module.css";
export default function Filter({ index, setFilter, _filter, refetch }) {
  return (
    <div className={filter.mainContainer}>
      <div className={filter.selectContainer}>
        <select
          onChange={(e) => {
            setFilter({
              ..._filter,
              origin: e.target.value == "Origin" ? null : e.target.value,
              action: true,
            });
            refetch({
              variables: {
                type: "kilim",
                price: _filter.price ? _filter.price : null,
                made: _filter.made ? _filter.made : null,
                origin: e.target.value == "Origin" ? null : e.target.value,
                first: 5,
              },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.products.edges.node = [
                  // ...prevResult.products.edges.node,
                  ...fetchMoreResult.products.edges.node,
                ];
                return fetchMoreResult;
              },
            });
          }}
          value={_filter.origin}
          name="origin"
          id="origin"
        >
          <option value="" selected>
            Origin
          </option>
          <option value="turkey">Turkey</option>
          <option value="iran">Iran</option>
          <option value="afghan">Afghan</option>
        </select>
        <select
          onChange={(e) => {
            setFilter({
              ..._filter,
              made: e.target.value == "Made" ? null : e.target.value,
              action: true,
            });
            refetch({
              variables: {
                type: "kilim",
                price: _filter.price ? _filter.price : null,
                made: e.target.value == "Made" ? null : e.target.value,
                origin: _filter.origin ? _filter.origin : null,
                first: 5,
              },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.products.edges.node = [
                  // ...prevResult.products.edges.node,
                  ...fetchMoreResult.products.edges.node,
                ];
                return fetchMoreResult;
              },
            });
          }}
          value={_filter.made}
          name="size"
          id="size"
        >
          <option value={""} selected>
            Made
          </option>
          <option value="hand">Hand</option>
          <option value="machine">Machine</option>
        </select>
      </div>
      <div className={filter.info}>
        <button
          className={filter.clearBtn}
          onClick={() => {
            setFilter({ price: "", made: "", origin: "", action: false });
            refetch({
              variables: {
                type: "kilim",
                first: 5,
              },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.products.edges.node = [
                  // ...prevResult.products.edges.node,
                  ...fetchMoreResult.products.edges.node,
                ];
                return fetchMoreResult;
              },
            });
          }}
        >
          Clear All
        </button>
        {/* <p>Pieces:{index}</p> */}
      </div>
    </div>
  );
}
